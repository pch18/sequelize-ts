import { Sequelize, Options } from 'sequelize';
import { SequelizeConfig } from './interface';
import { Model } from './model';
import Events from 'events'

export default class SequelizeTs extends Sequelize {
    events = new Events()
    modelList!: Model<any>[]
    static defaultConfig: Options = {
        port: 3306,
        dialect: 'mysql',
        timezone: (new Date().getTimezoneOffset() / -60 + ':00').replace(/(^\d)/, '+$1'),
        logging: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
    constructor(config: SequelizeConfig) {
        super(Object.assign({}, SequelizeTs.defaultConfig, config))
        //判断 如果出现初始化
        if (process.argv.includes('reModel')) {
            this.ModelsReset()
        } else if (process.argv.includes('upModel')) {
            this.ModelsUpdate()
        }
    }

    loadModels(filePath: string) {
        this.modelList = require('require-all')({
            dirname: filePath,
            filter: /(\.js|\.ts)$/,
        });
    }

    AfterModelsReset(func: () => Promise<void>) {
        this.events.on('AfterModelsReset', () => {
            func().then(() => {
                console.info('Model 插入初始化数据完成')
            })
        })
    }

    ModelsReset() {
        process.nextTick(() => {
            this.sync({ force: true }).then(() => {
                console.info('Model 重置完成')
                this.events.emit('AfterModelsReset')
            })
        })
    }

    ModelsUpdate() {
        process.nextTick(() => {
            this.sync({ alter: true }).then(() => {
                console.info('Model 更新完成')
            })
        })
    }


}

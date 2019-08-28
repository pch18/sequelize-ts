"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const events_1 = __importDefault(require("events"));
class SequelizeTs extends sequelize_1.Sequelize {
    constructor(config) {
        super(Object.assign({}, SequelizeTs.defaultConfig, config));
        this.events = new events_1.default();
        //判断 如果出现初始化
        if (process.argv.includes('reModel')) {
            this.ModelsReset();
        }
        else if (process.argv.includes('upModel')) {
            this.ModelsUpdate();
        }
    }
    loadModels(filePath) {
        this.modelList = require('require-all')({
            dirname: filePath,
            filter: /(\.js|\.ts)$/,
        });
    }
    AfterModelsReset(func) {
        this.events.on('AfterModelsReset', () => {
            func().then(() => {
                console.info('Model 插入初始化数据完成');
            });
        });
    }
    ModelsReset() {
        process.nextTick(() => {
            this.sync({ force: true }).then(() => {
                console.info('Model 重置完成');
                this.events.emit('AfterModelsReset');
            });
        });
    }
    ModelsUpdate() {
        process.nextTick(() => {
            this.sync({ alter: true }).then(() => {
                console.info('Model 更新完成');
            });
        });
    }
}
SequelizeTs.defaultConfig = {
    port: 3306,
    dialect: 'mysql',
    timezone: (new Date().getTimezoneOffset() / -60 + ':00').replace(/^(-?)(\d\:)/, '$10$2').replace(/(^\d)/, '+$1'),
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
exports.default = SequelizeTs;
//# sourceMappingURL=init.js.map
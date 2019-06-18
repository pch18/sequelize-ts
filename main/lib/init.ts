import { Sequelize } from 'sequelize';
import { SequelizeConfig } from './model_interface';

export default class SequelizeTs extends Sequelize {
    constructor(config: SequelizeConfig) {
        super(Object.assign({
            port: 3306,
            dialect: 'mysql',
            timezone: '+08:00',
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        }, config))
    }
}

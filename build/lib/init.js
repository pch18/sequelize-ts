"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class SequelizeTs extends sequelize_1.Sequelize {
    constructor(config) {
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
        }, config));
    }
}
exports.default = SequelizeTs;
//# sourceMappingURL=init.js.map
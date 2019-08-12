"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const myDate_1 = __importDefault(require("./myDate"));
const myTime_1 = __importDefault(require("./myTime"));
class Model_start {
    constructor(data) {
        const _this = this.constructor;
        for (let key in data) {
            if (_this.attributes[key]) {
                const type = _this.attributes[key].type;
                if (type instanceof sequelize_1.DataTypes.DATE) {
                    data[key] = data[key] && new myTime_1.default(data[key]);
                }
                else if (type instanceof sequelize_1.DataTypes.DATEONLY) {
                    data[key] = data[key] && new myDate_1.default(data[key]);
                }
                else if (type.key == 'JSON' && typeof data[key] == 'string') {
                    try {
                        data[key] = JSON.parse(data[key]) || null;
                    }
                    catch (_a) {
                        data[key] = null;
                    }
                }
            }
            else {
                delete data[key];
            }
        }
        Object.assign(this, data);
    }
    static get_attrs() {
        // const attributes = {} as any
        // for (let i in this.attributes) {
        //     attributes[i] = Object.assign({}, this.attributes[i])
        // }
        // return attributes
        return this.attributes;
    }
    static add_attr(name, opts) {
        this.attributes = Object.assign({}, this.attributes, {
            [name]: opts
        });
    }
    static get_opts() {
        return Object.assign({}, this.options);
    }
    static set_opt(opts) {
        this.options = Object.assign({}, this.options, opts);
    }
    static set_index(index_name, name, unique = false) {
        //深度复制后再修改
        const indexes = {};
        for (let i of this.options.indexes) {
            if (i.name && i.fields) {
                indexes[i.name] = {
                    name: i.name,
                    unique: !!i.unique,
                    fields: (i.fields ? i.fields.concat() : [])
                };
            }
        }
        //修改
        if (indexes[index_name]) {
            indexes[index_name].unique = indexes[index_name].unique || unique;
            indexes[index_name].fields.push(name);
        }
        else {
            indexes[index_name] = { name: index_name, unique, fields: [name] };
        }
        this.set_opt({ indexes: Object.values(indexes) });
    }
}
/*
    以下为定义模型需要
*/
Model_start.attributes = {};
Model_start.options = {
    freezeTableName: true,
    indexes: []
};
exports.Model_start = Model_start;
//# sourceMappingURL=model_start.js.map
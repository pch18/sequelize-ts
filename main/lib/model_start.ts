import { Model } from "./model";
import { WhereMyOptionds, Model_update, Model_origin } from "./interface";
import { ModelAttributeColumnOptions, ModelOptions, Model as originModel, CreateOptions, BulkCreateOptions, FindOptions, CountOptions, IndexesOptions, DataTypes, UpdateOptions, DestroyOptions } from "sequelize";
import myDate from "./myDate";
import myTime from "./myTime";

export class Model_start<T extends Model_start<T>> {
    /*
        以下为 基础配置
    */
    static originModel: typeof originModel

    constructor(data?: Model_origin<T>) {
        const _this = this.constructor as typeof Model_start
        for (let key in data) {
            if (_this.attributes[key]) {
                const type = _this.attributes[key].type as any
                if (type instanceof DataTypes.DATE) {
                    data[key] = data[key] && new myTime(data[key] as any) as any
                } else if (type instanceof DataTypes.DATEONLY) {
                    data[key] = data[key] && new myDate(data[key] as any) as any
                } else if (type.key == 'BOOLEAN' && data[key] !== null && data[key] !== undefined) {
                    data[key] = !!data[key] as any
                } else if (type.key == 'JSON' && typeof data[key] == 'string') {
                    try {
                        data[key] = JSON.parse(data[key] as any) || null
                    } catch{
                        data[key] = null as any
                    }
                }
            } else {
                delete data[key]
            }
        }
        Object.assign(this, data)
    }

    /*
        以下为定义模型需要
    */
    private static attributes: { [x: string]: ModelAttributeColumnOptions } = {}
    static get_attrs<T extends Model<T>>(this: (new () => T)): { [x in keyof Model_origin<T>]: typeof Model_start['attributes'][any] }
    static get_attrs() {
        // const attributes = {} as any
        // for (let i in this.attributes) {
        //     attributes[i] = Object.assign({}, this.attributes[i])
        // }
        // return attributes
        return this.attributes
    }
    static add_attr<T extends Model<T>>(this: (new () => T), name: keyof Model_origin<T>, opts: ModelAttributeColumnOptions): void
    static add_attr(name: string, opts: ModelAttributeColumnOptions) {
        this.attributes = Object.assign({}, this.attributes, {
            [name]: opts
        })
    }

    private static options: ModelOptions & {
        indexes: { name: string, unique: boolean, fields: string[] }[]
    } = {
            freezeTableName: true,
            indexes: []
        }
    static get_opts() {
        return Object.assign({}, this.options)
    }
    static set_opt(opts: ModelOptions) {
        this.options = Object.assign({}, this.options, opts)
    }


    static set_index<T extends Model<T>>(this: (new () => T), index_name: string, name: keyof Model_origin<T>, unique: boolean): void
    static set_index(index_name: string, name: string, unique = false) {
        //深度复制后再修改
        const indexes = {} as { [x: string]: typeof Model_start['options']['indexes'][any] }
        for (let i of this.options.indexes) {
            if (i.name && i.fields) {
                indexes[i.name] = {
                    name: i.name,
                    unique: !!i.unique,
                    fields: (i.fields ? i.fields.concat() : []) as string[]
                }
            }
        }
        //修改
        if (indexes[index_name]) {
            indexes[index_name].unique = indexes[index_name].unique || unique
            indexes[index_name].fields.push(name)
        } else {
            indexes[index_name] = { name: index_name, unique, fields: [name] }
        }
        this.set_opt({ indexes: Object.values(indexes) })
    }

}

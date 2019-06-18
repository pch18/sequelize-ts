import { Model } from "./model";
import SequelizeTs from './init'
import { DataTypes } from "./model_interface";
import { Model_static } from "./model_static";
export const Table = (sequelize_ts: SequelizeTs, options: typeof Model['options'] = {}) => (model: typeof Model) => {
    Object.assign(options, {
        indexes: model.get_indexes()
    })
    Object.assign(model, {
        options,
        originModel: sequelize_ts.define(model.name, model.get_attrs(), options)
    })
}

export const Column = (comment: string, type: DataTypes.DataType, allowNull: boolean, defaultValue?: string | number | (() => string | number)) => <T extends Model<T>>(model: T, name: string) => {
    const attribute: typeof Model['attributes'][any] = {
        allowNull, type, comment, defaultValue
    }
    Object.assign((<any>model).constructor.attributes, {
        [name]: attribute
    })
}

export const Unique = (unique_name: string) => <T extends Model<T>>(model: T, name: string) => {
    Indexes(unique_name, true)(model, name)
}

export const Indexes = (index_name: string, unique = false) => <T extends Model<T>>(model: T, name: string) => {
    if (!(<any>model).constructor.indexes[index_name]) {
        (<any>model).constructor.indexes[index_name] = {
            unique: false, fields: []
        }
    }
    if (unique) {
        (<any>model).constructor.indexes[index_name].unique = true
    }
    (<any>model).constructor.indexes[index_name].fields.push(name)
}

export const Options = (opts: Partial<typeof Model['attributes'][any]>) => <T extends Model<T>>(model: T, name: string) => {
    if (!(<any>model).constructor.attributes[name]) {
        throw new Error('Options 必须放在 Column 之上')
    }
    Object.assign((<any>model).constructor.attributes[name], opts)
}

export const Validate = (comment: string, validate_opt: RegExp | ((value: any) => boolean)) => <T extends Model<T>>(model: T, name: string) => {
    if (!(<any>model).constructor.attributes[name]) {
        throw new Error('Validate 必须放在 Column 之上')
    }
    const validate_function = validate_opt instanceof RegExp ? (value: any) => {
        return validate_opt.test(value)
    } : validate_opt
    const validate_function_string = validate_function.toString()

    if (!(<any>model).constructor.attributes[name].validate) {
        (<any>model).constructor.attributes[name].validate = {}
    }
    Object.assign((<any>model).constructor.attributes[name].validate, {
        ['validate_' + comment]: Object.assign((value: any) => {
            if (!validate_function(value)) {
                throw new Error(`字段:${name} 必须为${comment}`)
            }
        }, { validate_function, validate_function_string })
    })
}



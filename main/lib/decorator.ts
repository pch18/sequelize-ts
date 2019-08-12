import { Model } from "./model";
import SequelizeTs from './init'
import { DataTypes } from "./interface";
import { Model_base } from "./model_base";

export const Table = (sequelize_ts: SequelizeTs, options: Partial<typeof Model['options']> = {}) => (model: any) => {
    const m = (<any>model) as typeof Model_base
    m.set_opt(options)
    m.originModel = sequelize_ts.define(model.name, model.get_attrs(), model.get_opts())
}

type valuetype = string | number | boolean | null
export const Column = (
    comment: string,
    type: DataTypes.DataType,
    allowNull: boolean,
    defaultValue?: valuetype | (() => valuetype)
) => <T extends Model<T>>(model: T, name: string) => {
    const m = (<any>model).constructor as typeof Model_base as any
    m.add_attr(name as any, { allowNull, type, comment, defaultValue })
}

export const Unique = (unique_name?: string) => <T extends Model<T>>(model: T, name: string) => {
    const m = (<any>model).constructor as typeof Model_base as any
    m.set_index(unique_name || name, name, true)
}

export const Indexes = (index_name?: string, unique = false) => <T extends Model<T>>(model: T, name: string) => {
    const m = (<any>model).constructor as typeof Model_base as any
    m.set_index(index_name || name, name, unique)
}

export const Options = (opts: Partial<typeof Model['attributes'][any]>) => <T extends Model<T>>(model: T, name: string) => {
    const m = (<any>model).constructor as typeof Model_base as any
    Object.assign(m.attributes[name], opts)
}

export const ColumnDeletedAt = () => <T extends Model<T>>(model: T, name: string) => {
    Column('失效时间', DataTypes.DATE, true)(model, name)
    const m = (<any>model).constructor as typeof Model_base
    m.set_opt({ deletedAt: name, timestamps: true, paranoid: true })
}
export const ColumnCreatedAt = () => <T extends Model<T>>(model: T, name: string) => {
    Column('创建时间', DataTypes.DATE, true)(model, name)
    const m = (<any>model).constructor as typeof Model_base
    m.set_opt({ createdAt: name, timestamps: true })
}
export const ColumnUpdatedAt = () => <T extends Model<T>>(model: T, name: string) => {
    Column('更新时间', DataTypes.DATE, true)(model, name)
    const m = (<any>model).constructor as typeof Model_base
    m.set_opt({ updatedAt: name, timestamps: true })
}

export const Validate = (comment: string, validate_opt: RegExp | ((value: any) => boolean)) => <T extends Model<T>>(model: T, name: string) => {
    const validate_function = validate_opt instanceof RegExp ? (value: any) => {
        if (value === null || value === undefined) return true
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



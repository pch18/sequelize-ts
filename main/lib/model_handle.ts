import { Model } from "./model";
import { WhereMyOptionds, Model_update, Model_origin, Model_result, FindMyOptions } from "./interface";
import { ModelAttributeColumnOptions, ModelOptions, Model as originModel, CreateOptions, BulkCreateOptions, CountOptions, IndexesOptions, DataTypes, UpdateOptions, DestroyOptions } from "sequelize";
import myDate from "./myDate";
import myTime from "./myTime";
import { Model_start } from "./model_start";

export class Model_handle<T extends Model_handle<T>> extends Model_start<T> {

    /*
        以下为数据库 插入操作
    */
    static create<T>(
        this: (new () => T),
        values: Model_origin<T>,
        options?: CreateOptions): Promise<Model_result<T>>
    static async create(values: any, options: any = {}) {
        const result = await (<any>this.originModel).create(new this(values), Object.assign({}, options, { raw: true }))
        const data = new this(result.dataValues)
        return data
    }

    static bulkCreate<T>(
        this: (new () => T),
        values: Model_origin<T>[],
        options?: BulkCreateOptions): Promise<Model_result<T>[]>
    static async bulkCreate(values: any[], options: any = {}) {
        const result = await (<any>this.originModel).bulkCreate(values.map(t => new this(t)), Object.assign({}, options, { raw: true }))
        return result.map((r: any) => new this(r.dataValues))
    }


    /*
     以下为数据库 更新操作
    */
    static update<T>(
        this: (new () => T),
        values: Model_update<T>,
        where: WhereMyOptionds<T>,
        options?: UpdateOptions): Promise<boolean>
    static async update(values: any, where: any, options: any = {}) {
        const result = await (<any>this.originModel).update(values, Object.assign({}, options, { where }))
        return !!result[0]
    }

    /*
     以下为数据库 删除操作
    */
    static destroy<T>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options?: DestroyOptions): Promise<boolean>
    static async destroy(where: any, options: any = {}) {
        const result = await (<any>this.originModel).destroy(Object.assign({}, options, { where }))
        // const data = new this(result.dataValues)
        // return data
        return true
    }

    /*
        以下为数据库 查询操作 (基本操作)
    */
    static find<T, K extends keyof Model_origin<T>>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options: FindMyOptions<T> & { attributes: K[] }
    ): Promise<Model_result<T, K> | null>
    static find<T>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options?: FindMyOptions<T>
    ): Promise<Model_result<T> | null>
    static async find(where: any, options: any = {}) {
        const result = await (<any>this.originModel).findOne(Object.assign({}, options, { where, raw: true }))
        return result && new this(result)
    }

    static findAll<T, K extends keyof Model_origin<T>>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options: FindMyOptions<T> & { attributes: K[] }
    ): Promise<Model_result<T, K>[]>
    static findAll<T>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options?: FindMyOptions<T>
    ): Promise<Model_result<T>[]>
    static async findAll(where: any, options: any) {
        if (options.page) {
            options.limit = options.limit || 20
            options.offset = (options.page - 1) * options.limit
        }
        const result = await (<any>this.originModel).findAll(Object.assign({}, options, { where, raw: true }))
        return result.map((r: any) => new this(r))
    }

    static count<T>(
        this: (new () => T),
        where: WhereMyOptionds<T>,
        options?: FindMyOptions<T>
    ): Promise<number>
    static async count(where: any, options: any) {
        const result = await (<any>this.originModel).count(Object.assign({}, options, { where }))
        return result
    }

}

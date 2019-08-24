import { WhereMyOptionds, Model_update, Model_origin, Model_result, FindMyOptions } from "./interface";
import { CreateOptions, BulkCreateOptions, UpdateOptions, DestroyOptions } from "sequelize";
import { Model_start } from "./model_start";
export declare class Model_handle<T extends Model_handle<T>> extends Model_start<T> {
    static create<T>(this: (new () => T), values: Model_origin<T>, options?: CreateOptions): Promise<Model_result<T>>;
    static bulkCreate<T>(this: (new () => T), values: Model_origin<T>[], options?: BulkCreateOptions): Promise<Model_result<T>[]>;
    static update<T>(this: (new () => T), values: Model_update<T>, where: WhereMyOptionds<T>, options?: UpdateOptions): Promise<boolean>;
    static destroy<T>(this: (new () => T), where: WhereMyOptionds<T>, options?: DestroyOptions): Promise<boolean>;
    static find<T, K extends keyof Model_origin<T>>(this: (new () => T), where: WhereMyOptionds<T>, options: FindMyOptions<T> & {
        attributes: K[];
    }): Promise<Model_result<T, K> | null>;
    static find<T>(this: (new () => T), where: WhereMyOptionds<T>, options?: FindMyOptions<T>): Promise<Model_result<T> | null>;
    static findAll<T, K extends keyof Model_origin<T>>(this: (new () => T), where: WhereMyOptionds<T>, options: FindMyOptions<T> & {
        attributes: K[];
        group?: K;
    }): Promise<Model_result<T, K>[]>;
    static findAll<T>(this: (new () => T), where: WhereMyOptionds<T>, options?: FindMyOptions<T>): Promise<Model_result<T>[]>;
    static count<T>(this: (new () => T), where: WhereMyOptionds<T>, options?: FindMyOptions<T>): Promise<number>;
}
//# sourceMappingURL=model_handle.d.ts.map
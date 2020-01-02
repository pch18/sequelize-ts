import { Model_base } from "./model_base";
import { Model } from "./model";
export { ValidationError } from 'sequelize';
export declare type Model_origin<T extends Model_start<T>> = Omit<T, keyof Model_base<any>>;
export declare type Model_update<T extends Model_start<T>> = Partial<Model_origin<T>>;
export declare type Model_result<T extends Model_start<T>, K extends keyof Model_origin<T> = keyof Model_origin<T>> = Pick<Required<T>, K>;
import { Options, WhereOperators, FindOptions } from 'sequelize';
export interface SequelizeConfig extends Options {
    database: string;
    username: string;
    password: string;
    host: string;
}
import { DataTypes, Op } from 'sequelize';
import { Model_start } from "./model_start";
export { DataTypes, Op };
export declare type WhereMyOptionds<T extends Model<T>> = {
    [x in keyof Model_origin<T>]?: WhereOperators | T[x];
} & {
    [Op.or]?: WhereMyOptionds<T> | WhereMyOptionds<T>[];
} & {
    [Op.and]?: WhereMyOptionds<T> | WhereMyOptionds<T>[];
};
export declare type FindMyOptions<T extends Model<T>> = Pick<FindOptions, 'limit' | 'offset' | 'logging'> & {
    order?: [keyof T, 'desc' | 'asc'][];
};
//# sourceMappingURL=interface.d.ts.map
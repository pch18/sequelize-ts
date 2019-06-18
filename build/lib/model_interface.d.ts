import { Model_dynamic } from "./model_dynamic";
import { Model } from "./model";
export declare type Model_attr_all<T> = Exclude<keyof T, keyof Model_dynamic<any>>;
export declare type Model_attr_insert<T> = Exclude<keyof T, keyof Model<any>>;
export declare type Model_type_all<T> = {
    [x in Model_attr_all<T>]: T[x];
};
export declare type Model_type_inster<T> = {
    [x in Model_attr_insert<T>]: T[x];
};
export declare type Model_type_unrequired<T> = Partial<Model_attr_all<T>>;
import { Options } from 'sequelize';
export interface SequelizeConfig extends Options {
    database: string;
    username: string;
    password: string;
    host: string;
}
export { DataTypes, Op } from 'sequelize';
//# sourceMappingURL=model_interface.d.ts.map
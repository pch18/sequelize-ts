import { Model } from "./model";
import { Model_origin } from "./interface";
import { ModelAttributeColumnOptions, ModelOptions, Model as originModel } from "sequelize";
export declare class Model_start<T extends Model_start<T>> {
    static originModel: typeof originModel;
    constructor(data?: Model_origin<T>);
    private static attributes;
    static get_attrs<T extends Model<T>>(this: (new () => T)): {
        [x in keyof Model_origin<T>]: typeof Model_start['attributes'][any];
    };
    static add_attr<T extends Model<T>>(this: (new () => T), name: keyof Model_origin<T>, opts: ModelAttributeColumnOptions): void;
    private static options;
    static get_opts(): ModelOptions<originModel<any, any>> & {
        indexes: {
            name: string;
            unique: boolean;
            fields: string[];
        }[];
    };
    static set_opt(opts: ModelOptions): void;
    static set_index<T extends Model<T>>(this: (new () => T), index_name: string, name: keyof Model_origin<T>, unique: boolean): void;
}
//# sourceMappingURL=model_start.d.ts.map
import { Model } from "./model";
import { Model_type_inster } from "./model_interface";
import { ModelAttributeColumnOptions, ModelOptions, Model as originModel } from "sequelize";
export declare class Model_static {
    private static readonly originModel;
    private static readonly attributes;
    static get_attrs<T extends Model<T>>(this: (new () => T)): { [x in keyof T]: ModelAttributeColumnOptions; };
    private static readonly options;
    static get_opts<T extends Model<T>>(this: (new () => T)): ModelOptions<originModel<any, any>>;
    private static readonly indexes;
    static get_indexes<T extends Model<T>>(this: (new () => T)): import("sequelize/types").IndexesOptions[];
    static insert<T extends Model<T>>(this: (new () => T), values: Model_type_inster<T>): void;
}
//# sourceMappingURL=model_static.d.ts.map
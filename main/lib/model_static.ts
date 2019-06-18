import { Model } from "./model";
import { Model_attr_all, Model_type_inster } from "./model_interface";
import { ModelAttributeColumnOptions, ModelOptions, Model as originModel, ModelIndexesOptions } from "sequelize";

export class Model_static {
    private static readonly originModel: originModel

    private static readonly attributes: {
        readonly [x: string]: ModelAttributeColumnOptions
    } = {}
    static get_attrs<T extends Model<T>>(this: (new () => T)) {
        const _this = this as any as typeof Model_static
        return _this.attributes as { [x in Model_attr_all<T>]: typeof Model_static['attributes'][any] }
    }

    private static readonly options: ModelOptions
    static get_opts<T extends Model<T>>(this: (new () => T)) {
        const _this = this as any as typeof Model_static
        return _this.options
    }

    private static readonly indexes: {
        readonly [x: string]: ModelIndexesOptions
    } = {}
    static get_indexes<T extends Model<T>>(this: (new () => T)) {
        const _this = this as any as typeof Model_static
        return Object.values(_this.indexes)
    }

    static insert<T extends Model<T>>(this: (new () => T), values: Model_type_inster<T>) {

    }
}

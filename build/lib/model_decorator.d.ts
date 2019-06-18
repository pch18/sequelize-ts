import { Model } from "./model";
import SequelizeTs from './init';
import { DataTypes } from "./model_interface";
export declare const Table: (sequelize_ts: SequelizeTs, options?: import("sequelize/types").ModelOptions<import("sequelize/types").Model<any, any>>) => (model: typeof Model) => void;
export declare const Column: (comment: string, type: DataTypes.DataType, allowNull: boolean, defaultValue?: string | number | (() => string | number) | undefined) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Unique: (unique_name: string) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Indexes: (index_name: string, unique?: boolean) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Options: (opts: Partial<import("sequelize/types").ModelAttributeColumnOptions>) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Validate: (comment: string, validate_opt: RegExp | ((value: any) => boolean)) => <T extends Model<T>>(model: T, name: string) => void;
//# sourceMappingURL=model_decorator.d.ts.map
import { Model } from "./model";
import SequelizeTs from './init';
import { DataTypes } from "./interface";
export declare const Table: (sequelize_ts: SequelizeTs, options?: Partial<import("sequelize/types").ModelOptions<import("sequelize/types").Model<any, any>> & {
    indexes: {
        name: string;
        unique: boolean;
        fields: string[];
    }[];
}>) => (model: any) => void;
declare type valuetype = string | number | boolean | null;
export declare const Column: (comment: string, type: DataTypes.DataType, allowNull: boolean, defaultValue?: string | number | boolean | (() => valuetype) | null | undefined) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Unique: (unique_name?: string | undefined) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Indexes: (index_name?: string | undefined, unique?: boolean) => <T extends Model<T>>(model: T, name: string) => void;
export declare const Options: (opts: Partial<import("sequelize/types").ModelAttributeColumnOptions>) => <T extends Model<T>>(model: T, name: string) => void;
export declare const ColumnDeletedAt: () => <T extends Model<T>>(model: T, name: string) => void;
export declare const ColumnCreatedAt: () => <T extends Model<T>>(model: T, name: string) => void;
export declare const ColumnUpdatedAt: () => <T extends Model<T>>(model: T, name: string) => void;
export declare const Validate: (comment: string, validate_opt: RegExp | ((value: any) => boolean)) => <T extends Model<T>>(model: T, name: string) => void;
export {};
//# sourceMappingURL=decorator.d.ts.map
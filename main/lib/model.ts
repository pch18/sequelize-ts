import { Model_dynamic } from "./model_dynamic";
import { Column, Options } from "./model_decorator";
import { DataTypes } from "./model_interface";

export class Model<T> extends Model_dynamic<T> {
    @Options({ primaryKey: true })
    @Column('序号', DataTypes.INTEGER, true) id!: number
}
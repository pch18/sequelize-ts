import { Model_base } from "./model_base";
import { Column, Options, ColumnCreatedAt, ColumnUpdatedAt } from "./decorator";
import { DataTypes } from "./interface";
import myTime from "./myTime";


export class Model<T extends Model<T>> extends Model_base<T> {
    @Options({ primaryKey: true, autoIncrement: true })
    @Column('序号', DataTypes.INTEGER, true)
    id?: number

    @ColumnCreatedAt()
    createdAt?: myTime

    @ColumnUpdatedAt()
    updatedAt?: myTime
}

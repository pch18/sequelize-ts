import { Model_handle } from "./model_handle";
import { Model_result, WhereMyOptionds, FindMyOptions } from "./interface";
import { Model } from "./model";
export declare class Model_base<T extends Model_base<T>> extends Model_handle<T> {
    static pick<T extends Model<T>, K extends keyof T>(model: T, keys: K[]): Model_result<T, K>;
    /**
     * 加工指定数据,加入指定外键对应的数据
     * @param oDates 需要被加工的数组
     * @param iKey 生成新数据插入新字段名称
     * @param oKey 被加工数组中外键名称和where ['新数组中外键(id)','被加工数组中外键(xx_id)',新数组查找时添加的where]
     * @param nAttrs 生成新数据插入新字段中需要的字段
     */
    static makeUp<T extends Model<T>, odataT extends Model_result<any>, iKeyT extends string, oAttrsT extends keyof Model_result<T>>(this: (new () => T), oDates: odataT[], iKey: iKeyT, oKey: [keyof Model_result<T>, keyof odataT, WhereMyOptionds<T>?], nAttrs: oAttrsT[]): Promise<(odataT & {
        [x in iKeyT]: Model_result<T, oAttrsT> | null;
    })[]>;
    /**
     * 加工指定数据,加入指定外键对应的数据
     * @param oDates 需要被加工的数组
     * @param iKey 生成新数据插入新字段名称
     * @param oKey 被加工数组中外键名称和where ['新数组中外键(xx_id)','被加工数组中外键(id)',新数组查找时添加的where]
     * @param nAttrs 生成新数据插入新字段中需要的字段
     */
    static makeUps<T extends Model<T>, odataT extends Model_result<any>, iKeyT extends string, oAttrsT extends keyof Model_result<T>>(this: (new () => T), oDates: odataT[], iKey: iKeyT, oKey: [keyof Model_result<T>, keyof odataT, WhereMyOptionds<T>?], nAttrs: oAttrsT[], options?: FindMyOptions<T>): Promise<(odataT & {
        [x in iKeyT]: Model_result<T, oAttrsT>[];
    })[]>;
}
//# sourceMappingURL=model_base.d.ts.map
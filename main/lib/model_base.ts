import { Model_handle } from "./model_handle";
import { Model_origin, Model_result, Op, WhereMyOptionds, FindMyOptions } from "./interface";
import { Model } from "./model";
export class Model_base<T extends Model_base<T>> extends Model_handle<T> {

    static pick<T extends Model<T>, K extends keyof T>(model: T, keys: K[]): Model_result<T, K> {
        const result = {} as any
        for (let k of keys) {
            result[k] = model[k]
        }
        return result as any
    }

    /**
     * 加工指定数据,加入指定外键对应的数据
     * @param oDates 需要被加工的数组
     * @param iKey 生成新数据插入新字段名称
     * @param oKey 被加工数组中外键名称和where ['新数组中外键(id)','被加工数组中外键(xx_id)',新数组查找时添加的where]
     * @param nAttrs 生成新数据插入新字段中需要的字段
     */
    static async makeUp<T extends Model<T>, odataT extends Model_result<any>, iKeyT extends string, oAttrsT extends keyof Model_result<T>>(
        this: (new () => T),
        oDates: odataT[],
        iKey: iKeyT,
        oKey: [keyof Model_result<T>, keyof odataT, WhereMyOptionds<T>?],
        nAttrs: oAttrsT[],
    ): Promise<(odataT & { [x in iKeyT]: Model_result<T, oAttrsT> | null })[]>
    static async makeUp(oDates: any[], iKey: string, oKey: any, nAttrs: string[]): Promise<any[]> {
        const oKeySet = Array.from(new Set(oDates.map(t => t[oKey[1]])))
        nAttrs = Array.from(new Set(nAttrs.concat([oKey[0]])))
        const where = { [oKey[0]]: { [Op.in]: oKeySet } }
        Object.assign(where, oKey[2] || {})
        const nDates = await this.findAll(where, { attributes: nAttrs as any }) as any[]
        const nObject = {} as any[]
        for (let n of nDates) {
            nObject[n[oKey[0]]] = n
        }
        for (let o of oDates) {
            o[iKey] = nObject[o[oKey[1]]] || null
        }
        return oDates as any
    }

    /**
     * 加工指定数据,加入指定外键对应的数据
     * @param oDates 需要被加工的数组
     * @param iKey 生成新数据插入新字段名称
     * @param oKey 被加工数组中外键名称和where ['新数组中外键(xx_id)','被加工数组中外键(id)',新数组查找时添加的where]
     * @param nAttrs 生成新数据插入新字段中需要的字段
     */
    static async makeUps<T extends Model<T>, odataT extends Model_result<any>, iKeyT extends string, oAttrsT extends keyof Model_result<T>>(
        this: (new () => T),
        oDates: odataT[],
        iKey: iKeyT,
        oKey: [keyof Model_result<T>, keyof odataT, WhereMyOptionds<T>?],
        nAttrs: oAttrsT[],
        options?: FindMyOptions<T>
    ): Promise<(odataT & { [x in iKeyT]: Model_result<T, oAttrsT>[] })[]>
    static async makeUps(oDates: any[], iKey: string, oKey: any, nAttrs: string[], options: any = {}): Promise<any[]> {
        const oKeySet = Array.from(new Set(oDates.map(t => t[oKey[1]])))
        nAttrs = Array.from(new Set(nAttrs.concat([oKey[0]])))
        const where = { [oKey[0]]: { [Op.in]: oKeySet } }
        Object.assign(where, oKey[2] || {})
        const nDates = await this.findAll(where, Object.assign({}, options, { attributes: nAttrs as any })) as any[]
        const nObject = {} as any[]
        for (let n of nDates) {
            if (!nObject[n[oKey[0]]]) {
                nObject[n[oKey[0]]] = []
            }
            nObject[n[oKey[0]]].push(n)
        }
        for (let o of oDates) {
            o[iKey] = nObject[o[oKey[1]]] || []
        }
        return oDates as any
    }



}

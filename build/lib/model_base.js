"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_handle_1 = require("./model_handle");
const interface_1 = require("./interface");
class Model_base extends model_handle_1.Model_handle {
    static pick(model, keys) {
        const result = {};
        for (let k of keys) {
            result[k] = model[k];
        }
        return result;
    }
    static makeUp(oDates, iKey, oKey, nAttrs) {
        return __awaiter(this, void 0, void 0, function* () {
            const oKeySet = Array.from(new Set(oDates.map(t => t[oKey[1]])));
            nAttrs = Array.from(new Set(nAttrs.concat([oKey[0]])));
            const where = { [oKey[0]]: { [interface_1.Op.in]: oKeySet } };
            Object.assign(where, oKey[2] || {});
            const nDates = yield this.findAll(where, { attributes: nAttrs });
            const nObject = {};
            for (let n of nDates) {
                nObject[n[oKey[0]]] = n;
            }
            for (let o of oDates) {
                o[iKey] = nObject[o[oKey[1]]] || null;
            }
            return oDates;
        });
    }
    static makeUps(oDates, iKey, oKey, nAttrs, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const oKeySet = Array.from(new Set(oDates.map(t => t[oKey[1]])));
            nAttrs = Array.from(new Set(nAttrs.concat([oKey[0]])));
            const where = { [oKey[0]]: { [interface_1.Op.in]: oKeySet } };
            Object.assign(where, oKey[2] || {});
            const nDates = yield this.findAll(where, Object.assign({}, options, { attributes: nAttrs }));
            const nObject = {};
            for (let n of nDates) {
                if (!nObject[n[oKey[0]]]) {
                    nObject[n[oKey[0]]] = [];
                }
                nObject[n[oKey[0]]].push(n);
            }
            for (let o of oDates) {
                o[iKey] = nObject[o[oKey[1]]] || [];
            }
            return oDates;
        });
    }
}
exports.Model_base = Model_base;
//# sourceMappingURL=model_base.js.map
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
const model_start_1 = require("./model_start");
class Model_handle extends model_start_1.Model_start {
    static create(values, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.create(new this(values), Object.assign({}, options, { raw: true }));
            const data = new this(result.dataValues);
            return data;
        });
    }
    static bulkCreate(values, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.bulkCreate(values.map(t => new this(t)), Object.assign({}, options, { raw: true }));
            return result.map((r) => new this(r.dataValues));
        });
    }
    static update(values, where, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.update(values, Object.assign({}, options, { where }));
            return !!result[0];
        });
    }
    static destroy(where, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.destroy(Object.assign({}, options, { where }));
            // const data = new this(result.dataValues)
            // return data
            return true;
        });
    }
    static find(where, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.findOne(Object.assign({}, options, { where, raw: true }));
            return result && new this(result);
        });
    }
    static findAll(where, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.findAll(Object.assign({}, options, { where, raw: true }));
            return result.map((r) => new this(r));
        });
    }
    static count(where, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.originModel.count(Object.assign({}, options, { where }));
            return result;
        });
    }
}
exports.Model_handle = Model_handle;
//# sourceMappingURL=model_handle.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model_static {
    static get_attrs() {
        const _this = this;
        return _this.attributes;
    }
    static get_opts() {
        const _this = this;
        return _this.options;
    }
    static get_indexes() {
        const _this = this;
        return Object.values(_this.indexes);
    }
    static insert(values) {
    }
}
Model_static.attributes = {};
Model_static.indexes = {};
exports.Model_static = Model_static;
//# sourceMappingURL=model_static.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
exports.Table = (sequelize_ts, options = {}) => (model) => {
    const m = model;
    m.set_opt(options);
    m.originModel = sequelize_ts.define(model.name, model.get_attrs(), model.get_opts());
};
exports.Column = (comment, type, allowNull, defaultValue) => (model, name) => {
    const m = model.constructor;
    m.add_attr(name, { allowNull, type, comment, defaultValue });
};
exports.Unique = (unique_name) => (model, name) => {
    const m = model.constructor;
    m.set_index(unique_name || name, name, true);
};
exports.Indexes = (index_name, unique = false) => (model, name) => {
    const m = model.constructor;
    m.set_index(index_name || name, name, unique);
};
exports.Options = (opts) => (model, name) => {
    const m = model.constructor;
    Object.assign(m.attributes[name], opts);
};
exports.ColumnDeletedAt = () => (model, name) => {
    exports.Column('失效时间', interface_1.DataTypes.DATE, true)(model, name);
    const m = model.constructor;
    m.set_opt({ deletedAt: name, timestamps: true, paranoid: true });
};
exports.ColumnCreatedAt = () => (model, name) => {
    exports.Column('创建时间', interface_1.DataTypes.DATE, true)(model, name);
    const m = model.constructor;
    m.set_opt({ createdAt: name, timestamps: true });
};
exports.ColumnUpdatedAt = () => (model, name) => {
    exports.Column('更新时间', interface_1.DataTypes.DATE, true)(model, name);
    const m = model.constructor;
    m.set_opt({ updatedAt: name, timestamps: true });
};
exports.Validate = (comment, validate_opt) => (model, name) => {
    const validate_function = validate_opt instanceof RegExp ? (value) => {
        if (value === null || value === undefined)
            return true;
        return validate_opt.test(value);
    } : validate_opt;
    const validate_function_string = validate_function.toString();
    if (!model.constructor.attributes[name].validate) {
        model.constructor.attributes[name].validate = {};
    }
    Object.assign(model.constructor.attributes[name].validate, {
        ['validate_' + comment]: Object.assign((value) => {
            if (!validate_function(value)) {
                throw new Error(`字段:${name} 必须为${comment}`);
            }
        }, { validate_function, validate_function_string })
    });
};
//# sourceMappingURL=decorator.js.map
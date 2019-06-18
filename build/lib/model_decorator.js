"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = (sequelize_ts, options = {}) => (model) => {
    Object.assign(options, {
        indexes: model.get_indexes()
    });
    Object.assign(model, {
        options,
        originModel: sequelize_ts.define(model.name, model.get_attrs(), options)
    });
};
exports.Column = (comment, type, allowNull, defaultValue) => (model, name) => {
    const attribute = {
        allowNull, type, comment, defaultValue
    };
    Object.assign(model.constructor.attributes, {
        [name]: attribute
    });
};
exports.Unique = (unique_name) => (model, name) => {
    exports.Indexes(unique_name, true)(model, name);
};
exports.Indexes = (index_name, unique = false) => (model, name) => {
    if (!model.constructor.indexes[index_name]) {
        model.constructor.indexes[index_name] = {
            unique: false, fields: []
        };
    }
    if (unique) {
        model.constructor.indexes[index_name].unique = true;
    }
    model.constructor.indexes[index_name].fields.push(name);
};
exports.Options = (opts) => (model, name) => {
    if (!model.constructor.attributes[name]) {
        throw new Error('Options 必须放在 Column 之上');
    }
    Object.assign(model.constructor.attributes[name], opts);
};
exports.Validate = (comment, validate_opt) => (model, name) => {
    if (!model.constructor.attributes[name]) {
        throw new Error('Validate 必须放在 Column 之上');
    }
    const validate_function = validate_opt instanceof RegExp ? (value) => {
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
//# sourceMappingURL=model_decorator.js.map
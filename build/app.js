"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = __importDefault(require("./lib/init"));
exports.default = init_1.default;
__export(require("./lib/model"));
__export(require("./lib/model_decorator"));
//# sourceMappingURL=app.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_dynamic_1 = require("./model_dynamic");
const model_decorator_1 = require("./model_decorator");
const model_interface_1 = require("./model_interface");
class Model extends model_dynamic_1.Model_dynamic {
}
__decorate([
    model_decorator_1.Options({ primaryKey: true }),
    model_decorator_1.Column('序号', model_interface_1.DataTypes.INTEGER, true),
    __metadata("design:type", Number)
], Model.prototype, "id", void 0);
exports.Model = Model;
//# sourceMappingURL=model.js.map
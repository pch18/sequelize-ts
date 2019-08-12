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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_base_1 = require("./model_base");
const decorator_1 = require("./decorator");
const interface_1 = require("./interface");
const myTime_1 = __importDefault(require("./myTime"));
class Model extends model_base_1.Model_base {
}
__decorate([
    decorator_1.Options({ primaryKey: true, autoIncrement: true }),
    decorator_1.Column('序号', interface_1.DataTypes.INTEGER, true),
    __metadata("design:type", Number)
], Model.prototype, "id", void 0);
__decorate([
    decorator_1.ColumnCreatedAt(),
    __metadata("design:type", myTime_1.default)
], Model.prototype, "createdAt", void 0);
__decorate([
    decorator_1.ColumnUpdatedAt(),
    __metadata("design:type", myTime_1.default)
], Model.prototype, "updatedAt", void 0);
exports.Model = Model;
//# sourceMappingURL=model.js.map
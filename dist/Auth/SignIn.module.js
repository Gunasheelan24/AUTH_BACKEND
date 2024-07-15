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
const common_1 = require("@nestjs/common");
const SignIn_service_1 = require("./SignIn.service");
const SignIn_controller_1 = require("./SignIn.controller");
const Auth_Entity_1 = require("./Entity/Auth.Entity");
const typeorm_1 = require("@nestjs/typeorm");
let SignInModule = class SignInModule {
    constructor() { }
};
SignInModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Auth_Entity_1.default])],
        controllers: [SignIn_controller_1.default],
        providers: [SignIn_service_1.default],
    }),
    __metadata("design:paramtypes", [])
], SignInModule);
exports.default = SignInModule;
//# sourceMappingURL=SignIn.module.js.map
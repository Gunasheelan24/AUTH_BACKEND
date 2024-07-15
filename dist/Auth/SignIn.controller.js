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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const SignIn_service_1 = require("./SignIn.service");
const SignIn_dto_1 = require("./Dto/SignIn.dto");
let SignInController = class SignInController {
    constructor(SignInService) {
        this.SignInService = SignInService;
    }
    signInMethod(userDetail) {
        return this.SignInService.SignIn(userDetail);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignIn_dto_1.default]),
    __metadata("design:returntype", void 0)
], SignInController.prototype, "signInMethod", null);
SignInController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [SignIn_service_1.default])
], SignInController);
exports.default = SignInController;
//# sourceMappingURL=SignIn.controller.js.map
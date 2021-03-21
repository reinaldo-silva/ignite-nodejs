"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCrouseService = /** @class */ (function () {
    function CreateCrouseService() {
    }
    CreateCrouseService.prototype.execute = function (_a) {
        var name = _a.name, duration = _a.duration, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreateCrouseService;
}());
exports.default = new CreateCrouseService();

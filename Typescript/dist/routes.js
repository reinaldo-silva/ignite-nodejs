"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var createCouseService_1 = __importDefault(require("./createCouseService"));
function createCourse(request, response) {
    createCouseService_1.default.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Reinaldo",
    });
    return response.send();
}
exports.createCourse = createCourse;

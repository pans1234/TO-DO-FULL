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
exports.TodoTaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task_dto_1 = require("./data/task.dto");
const task_service_1 = require("./task.service");
let TodoTaskController = class TodoTaskController {
    constructor(todoServiceObj) {
        this.todoServiceObj = todoServiceObj;
    }
    addTask(data) {
        console.log("==>", data);
        return this.todoServiceObj.addTaskService(data);
    }
    updateTask(task) {
        return this.todoServiceObj.updateTaskService(task);
    }
    deleteTask(taskId) {
        return this.todoServiceObj.deleteTaskService(taskId);
    }
    getAllTask() {
        return this.todoServiceObj.getAllTask();
    }
};
__decorate([
    (0, common_1.Post)("/add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TodoTaskDto]),
    __metadata("design:returntype", Array)
], TodoTaskController.prototype, "addTask", null);
__decorate([
    (0, common_1.Put)("/edit"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TodoTaskDto]),
    __metadata("design:returntype", task_dto_1.TodoTaskDto)
], TodoTaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TodoTaskController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Get)("/allTask"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TodoTaskController.prototype, "getAllTask", null);
TodoTaskController = __decorate([
    (0, swagger_1.ApiTags)('task'),
    (0, common_1.Controller)("task"),
    __metadata("design:paramtypes", [task_service_1.TodoTaskService])
], TodoTaskController);
exports.TodoTaskController = TodoTaskController;
//# sourceMappingURL=task.controller.js.map
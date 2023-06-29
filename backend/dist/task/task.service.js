"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTaskService = void 0;
const common_1 = require("@nestjs/common");
let TodoTaskService = class TodoTaskService {
    constructor() {
        this.TodoTaskData = [];
    }
    addTaskService(taskData) {
        taskData.id = Math.floor(Math.random() * 100000).toString();
        this.TodoTaskData.push(taskData);
        return this.TodoTaskData;
    }
    updateTaskService(task) {
        let index = this.TodoTaskData.findIndex((currTask) => {
            return currTask.id == task.id;
        });
        this.TodoTaskData[index] = task;
        return this.TodoTaskData[index];
    }
    deleteTaskService(taskId) {
        let index = this.TodoTaskData.findIndex(({ id }) => {
            return id == taskId;
        });
        if (index >= 0) {
            this.TodoTaskData.splice(index, 1);
            return "The Task Has been Deleted successfully!!";
        }
        else {
            throw new common_1.BadRequestException("Cant Deleted!!");
        }
    }
    getAllTask() {
        return this.TodoTaskData;
    }
};
TodoTaskService = __decorate([
    (0, common_1.Injectable)()
], TodoTaskService);
exports.TodoTaskService = TodoTaskService;
//# sourceMappingURL=task.service.js.map
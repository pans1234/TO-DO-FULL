import { TodoTaskDto } from "./data/task.dto";
import { TodoTaskService } from "./task.service";
export declare class TodoTaskController {
    private todoServiceObj;
    constructor(todoServiceObj: TodoTaskService);
    addTask(data: TodoTaskDto): TodoTaskDto[];
    updateTask(task: TodoTaskDto): TodoTaskDto;
    deleteTask(taskId: string): string;
    getAllTask(): TodoTaskDto[];
}

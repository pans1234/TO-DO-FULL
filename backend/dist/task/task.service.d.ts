import { TodoTaskDto } from "./data/task.dto";
export declare class TodoTaskService {
    TodoTaskData: TodoTaskDto[];
    addTaskService(taskData: TodoTaskDto): TodoTaskDto[];
    updateTaskService(task: TodoTaskDto): TodoTaskDto;
    deleteTaskService(taskId: string): string;
    getAllTask(): TodoTaskDto[];
}

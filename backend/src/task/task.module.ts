import { Module } from "@nestjs/common";
import { TodoTaskController } from "./task.controller";
import { TodoTaskService } from "./task.service";

@Module({
    imports : [],
    exports : [],
    providers : [TodoTaskService],
    controllers : [TodoTaskController]
})
export class TodoTaskModule{}
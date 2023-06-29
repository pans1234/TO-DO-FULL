import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TodoTaskDto } from "./data/task.dto";
import { TodoTaskService } from "./task.service";

// For giving the API TAG in Swagger
@ApiTags('task')
@Controller("task")
export class TodoTaskController{

    constructor(private todoServiceObj : TodoTaskService){}

    @Post("/add")
    addTask(@Body() data : TodoTaskDto) : TodoTaskDto[]{
        console.log("==>",data);
        
        return this.todoServiceObj.addTaskService(data)
    }

    @Put("/edit")
    updateTask(@Body() task : TodoTaskDto) : TodoTaskDto{
        return this.todoServiceObj.updateTaskService(task);
    }

    @Delete("/delete/:id")
    deleteTask(@Param("id" ,  ParseIntPipe) taskId : string): string {
        return this.todoServiceObj.deleteTaskService(taskId);
    }

    @Get("/allTask")
    getAllTask(): TodoTaskDto[]{
        return this.todoServiceObj.getAllTask();
    }

}



import { BadRequestException, Injectable } from "@nestjs/common";
import { log } from "console";
import { TodoTaskDto } from "./data/task.dto";

@Injectable()
export class TodoTaskService{

    TodoTaskData : TodoTaskDto[] = [];

    addTaskService(taskData : TodoTaskDto) : TodoTaskDto[]{
        taskData.id = Math.floor(Math.random()*100000).toString()
        this.TodoTaskData.push(taskData);  
        return this.TodoTaskData;
    }

    updateTaskService(task : TodoTaskDto) : TodoTaskDto{
        let index = this.TodoTaskData.findIndex((currTask)=>{
            return currTask.id == task.id
        })
        this.TodoTaskData[index] = task;
        return this.TodoTaskData[index];
    }

    deleteTaskService(taskId : string) : string{
        let index = this.TodoTaskData.findIndex(({id})=>{
            return id == taskId
        })
        if(index >= 0){
            this.TodoTaskData.splice(index , 1)
            return "The Task Has been Deleted successfully!!"  }    
        else{
            throw new BadRequestException("Cant Deleted!!")
        }
    }

    getAllTask() : TodoTaskDto[]{
        return this.TodoTaskData;
    }

}
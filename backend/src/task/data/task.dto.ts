import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

export class TodoTaskDto{

    @ApiProperty({type:String})
    // By Deafult the 
    @IsString()
    id : string ;

    @ApiProperty({type:String})
    @IsString()
    taskItem : string;
}
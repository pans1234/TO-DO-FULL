// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component  , OnInit} from '@angular/core';
import { FormGroup , FormBuilder , FormControl , Validator, Validators } from '@angular/forms';
import { getTodotask , Todotask } from './model/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  taskForm !: FormGroup;
  updateForm !: FormGroup;
  taskPayload : Todotask = getTodotask;
  taskarray : Todotask[] = [];
  addTaskValue : string = '';
  editTaskValue : string = '';
  deleteTaskValue : string = '';

  constructor(private todolistServiceObj : TodoService){
    this.taskForm = new FormGroup({
      taskItem : new FormControl('', Validators.required)
    })

    this.updateForm = new FormGroup({
      taskItemEdited : new FormControl('' , Validators.required)
    })
  }

  ngOnInit() : void{
    
    this.editTaskValue = '';
    this.addTaskValue = ''
    this.deleteTaskValue = ''
    this.taskarray= [];
    this.getAllTask()
    
  }

  addTask(){
    console.log("Pyal" , this.taskForm.value.taskItem);
    console.log("payal2" , this.taskForm);
    
      
      this.taskPayload.taskItem = this.taskForm.value.taskItem
      console.log(this.taskarray.length);
      
      // this.taskPayload.id = "1"
      console.log("=========>", this.taskPayload.taskItem);
      // console.log("===>", this.taskPayload.id);

      
      return this.todolistServiceObj.addTaskService(this.taskPayload).subscribe((res)=>{
          this.ngOnInit();
          this.addTaskValue = '';
      } , (err)=>{
        console.log(err);
         
      });
   
  }

  // deleteTask(taskId : string){
  deleteTask(task : Todotask){
    console.log("=======deleted!!!" , task);
    return this.todolistServiceObj.deleteTaskService(task.id).subscribe((res)=>{
      this.ngOnInit();
      this.deleteTaskValue = '';
      console.log("---------------------------->",res);    
    }, (err)=>{
      console.log(err);
      console.log("Unable to Deleted !! Some Problem Occured!!")
    });
  }

  updateTask(){
  // updateTask(event : any){
    this.taskPayload.taskItem = this.editTaskValue
    return this.todolistServiceObj.updateTaskService(this.taskPayload).subscribe((res)=>{
      this.ngOnInit()
    }, (err)=>{
      console.log("Unable to Editthe Task!!")
    });
  }

  getAllTask(){
    return this.todolistServiceObj.getAllTaskService().subscribe((res : any)=>{
      this.taskarray = res;
    }, (err)=>{
      console.log("Unable to get the List")
    })
  }

  call(etask : Todotask){
    console.log("Adiiii",etask);
    
    this.taskPayload = etask;
    this.editTaskValue = etask.taskItem
  }

  // drop(event: CdkDragDrop<Todotask[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }
}

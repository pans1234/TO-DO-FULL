import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todotask } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    serviceURL !: string ;
  constructor(private http : HttpClient) { 
    this.serviceURL = "http://localhost:3000/task";
  }

  addTaskService(payload : Todotask) : Observable<Todotask>{
    return this.http.post<Todotask>(`${this.serviceURL}/add` , payload)
  }

  updateTaskService(payload : Todotask) : Observable<Todotask>{
    return this.http.put<Todotask>(`${this.serviceURL}/edit` , payload)
  }

  deleteTaskService(taskId : string) : Observable<Todotask> {
    return this.http.delete<Todotask>(`${this.serviceURL}/delete/${taskId}` )
  }

  getAllTaskService() : Observable<Todotask>{
    return this.http.get<Todotask>(`${this.serviceURL}/allTask`)
  }

}

import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


export class Todo{
constructor(
  public id: number,
  public description: string,
  public done : boolean,
  public targetDate: Date
){}

}
@Component({
  selector: 'app-list-todos-component',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos-component.component.html',
  styleUrl: './list-todos-component.component.css'
})
export class ListTodosComponentComponent {


  todos = [
    new Todo(1, "homework", false, new Date()),
    new Todo(2, "meeting", false, new Date()),
    new Todo(3, "grocery shopping", false, new Date()),
    new Todo(4, "exercise", false, new Date()),
    new Todo(5, "read a book", false, new Date()),
    new Todo(6, "call a friend", false, new Date()),
    new Todo(7, "clean the house", false, new Date()),
    new Todo(8, "cook dinner", false, new Date()),
    new Todo(9, "work on a hobby project", false, new Date()),
    new Todo(10, "plan the week ahead", false, new Date()),
    new Todo(1, "homework", false, new Date()),
    new Todo(2, "meeting", false, new Date()),
    new Todo(3, "grocery shopping", false, new Date()),
    new Todo(4, "exercise", false, new Date()),
    new Todo(5, "read a book", false, new Date()),
    new Todo(6, "call a friend", false, new Date()),
    new Todo(7, "clean the house", false, new Date()),
    new Todo(8, "cook dinner", false, new Date()),
    new Todo(9, "work on a hobby project", false, new Date()),
    new Todo(10, "plan the week ahead", false, new Date())];
  


}

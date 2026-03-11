import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box!');
  protected count = signal(0);
  protected todoList = signal(
    [
      'Angular lernen',
      'Pizza essen',
      'Sport machen'
    ]
  );

  protected logMessage(message: string): void {
    console.log(message);
  }


  protected changeTitle(): void {
    this.title.set('Der Titel wurde geändert!');
  }

  protected increaseCount(): void {
    this.count.update(value => value+1);
  }

  protected decreaseCount(): void {
    this.count.update(value => value-1);
  }

  protected resetCount(): void {
    this.count.set(0);
  }

  protected addToDo(newTodo: string): void {
    this.todoList.update(oldArray => [...oldArray, newTodo]);
  }

  protected removeTodo(todoToRemove: string): void {
    this.todoList.update(oldArray => oldArray.filter(t => t !== todoToRemove));
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mein erster Angular-Kurs, aber es wird nicht der letzte sein!');
  protected count = signal(0);



  protected changeTitle(): void {
    this.title.set('Der Titel wurde geändert!');
  }

}

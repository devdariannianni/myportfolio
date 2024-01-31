import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AbmeComponent } from './abme/abme.component';
import { GameComponent } from './game/game.component';
import { TodoComponent } from './todo/todo.component';
import { ApiComponent } from './api/api.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
     RouterOutlet,
    AbmeComponent,
    GameComponent,
    TodoComponent,
    ApiComponent

    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myportfolio';
}

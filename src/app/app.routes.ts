import { Routes } from '@angular/router';
import { AbmeComponent } from './abme/abme.component';
import { GameComponent } from './game/game.component';
import { TodoComponent } from './todo/todo.component';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [
    {path: '', redirectTo: '/about-me',  pathMatch: 'full'},
    { path: 'about-me', component: AbmeComponent },
    { path: 'game', component: GameComponent },
    { path: 'todo-list', component: TodoComponent },
    { path: 'api', component: ApiComponent },
    { path: '', redirectTo: '/about-me', pathMatch: 'full' }
];

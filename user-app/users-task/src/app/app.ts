import { Component } from '@angular/core';
import { UserComponent } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'users-task';
}

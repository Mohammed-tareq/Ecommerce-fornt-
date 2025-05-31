import { Component } from '@angular/core';
interface User {
  id: number;
  userName: string;
  email: string;
  phone: string;
  img: string;
  isVerified: boolean;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  users: User[] = [
    { id: 1, userName: "ali", email: "ali@test.com", phone: "01012123541", img: "./profile.jpg", isVerified: true },
    { id: 2, userName: "ahmed", email: "ahmed@test.com", phone: "01012123541", img: "", isVerified: true },
    { id: 3, userName: "khalid", email: "khaled@test.com", phone: "01012123541", img: "", isVerified: false },
    { id: 4, userName: "karim", email: "karim@test.com", phone: "01012123541", img: "", isVerified: false },
  ]
}

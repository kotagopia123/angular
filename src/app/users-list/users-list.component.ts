import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
     
    usersList: any[] = [];
  

   constructor(private userService: UserService) {}

   ngOnInit(): void {
      this.usersList = this.userService.getUsers()
   } 

   onSave(data: any) {
     console.log(data);
   }
}  

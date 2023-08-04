import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
    
  @Input() user: any;

  @Output() onSave: EventEmitter<any> = new EventEmitter<any>;

  constructor(private userService: UserService, private router: Router) { }

   ngOnInit(): void {
     
   } 

   save() {
    this.onSave.emit(this.user)
   } 

   goToUserDetails(id: any) {
     // this.router.navigate(['/users', id]);
       this.router.navigateByUrl('/users/'+id);
   }
}

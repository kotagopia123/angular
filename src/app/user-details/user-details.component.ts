import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  user: any = {};
  id: any;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
     // this.id = this.route.snapshot.params['id']
     this.route.params.subscribe((params: any) => {
      console.log(params);
      this.id = params.id;
      this.getUserdetails();
    });
    this.route.queryParams.subscribe()
    console.log(this.id);
  }
    
  getUserdetails() {
    this.user = this.userService.getUser(this.id);
  } 

  nextUser() {
    this.router.navigate(['/users', 4]);
  }




  ngOnInit(): void { 
    this.user = this.userService.getUser(this.id);
  } 

  
} 

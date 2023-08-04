import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit{
   
    menu: any = [
    {name: 'Introduction', path: 'introduction'} ,
    {name: 'Syntax' , path: 'syntax'},
    {name: 'Selectors',path: 'selectors'}
   ] 

  constructor(private userservice: UserService) {} 

  user: any; 


  ngOnInit(): void {
       // this.user = this.userservice.user
        this.userservice.userSub.subscribe((u: any) => {
         this.user = u;
       });
 
  }

}

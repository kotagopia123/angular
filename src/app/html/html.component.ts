import { Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  menu: any = [
    {name: 'Default', path: 'default'} ,
    {name: 'Introduction' , path: 'intro'},
    {name: 'Basics',path: 'basics'}
  ]

  constructor(private userservice: UserService){}
  // userSub!: Subscription;

  regInfo: any={
     firstName: 'Gopi',
     lastName: '',
     age: '25',
     phone: '',
     dob: '',
  }; 

  firstNameChange(){
    console.log(this.regInfo.firstName);
  } 

  onFocus(evt: any){
    console.log(evt);
  }


  ngOnInit(): void {
     this.userservice.user = {name: 'gopi', email: 'kotagopi97@gmail.com'};
     this.userservice.userSub.next({name: 'gopi', email: 'kotagopi97@gmail.com'});
     this.userservice.userSub.next({name: 'gopi1', email: 'kotagopi97@gmail.com'});


// observable subject examples
    //  var users = new Subject();
    //    users.subscribe((v) => console.log("A "+v));
    //    users.next(1);
    //    users.subscribe((v) => console.log("B "+v));
    //    users.subscribe((v) => console.log("C "+v));
    //    users.next(2); 


// BehaviorSubject examples 

  //  var students = new Subject();
  //   students.subscribe((v) => console.log("C " + v));
  //   students.next(1);
  //   students.subscribe((v) => console.log("D " + v));
  //   students.next(9);
  //   students.subscribe((v) => console.log("E " + v));
  //   students.next(8);
  //   students.next(6);
  //   students.subscribe((v) => console.log("F " + v));
  //   students.next(2);
  //   students.subscribe((v) => console.log("G " + v));
  //   students.subscribe((v) => console.log("H " + v));
  //   students.next(4);
  // };   
  }
}
import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges,AfterViewInit{

  constructor(private userservice: UserService) { }

  user: any;
  @Input() data: any;
  @Input() sample: any;
  @ViewChild('heading') heading: any;

  ngOnChanges(value: SimpleChanges): void {
    console.log("header component ",value);
  }

  ngOnInit(): void {
    //this.user = this.userservice.user
     this.userservice.userSub.subscribe((u: any) => {
      this.user= u;
     }); 

    console.log('header component on Init'); 
  } 
   

  ngAfterViewInit(): void {
  //(document.querySelector('h1') as any).style.background = 'blue';

  const h1: HTMLElement = this.heading.nativeElement;
  h1.style.background = "blue";
  console.log("header component After view Init");
  } 

   Resources:String ="Sample Application";

}

   

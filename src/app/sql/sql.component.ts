import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})
export class SqlComponent implements OnInit{
  
  menu: any = [
    {name: 'Intro', path: 'introductions'} ,
    {name: 'Select' , path: 'select'},
    {name: 'Comment',path: 'comment'}
  ]
  constructor(){ } 



  ngOnInit(): void {
    
  }
}

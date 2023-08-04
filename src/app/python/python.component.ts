import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit{
   
  menu = [
    {name: 'Intro', path: 'intro'},
    {name: 'Syntax', path: 'syntax'},
    {name: 'Comments', path: 'comments'}
  ]

  constructor() {} 

  ngOnInit(): void {
    
  }
}

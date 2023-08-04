import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
 menu: any = [{name: 'Html', path: 'html'}, {name: 'css', path: 'css'}, {name: 'javascript', path: 'js'},
  {name: 'sql' , path: 'sql'} ,{name: 'python' , path: 'python'},{name: 'Users', path:'users'}]
  constructor() { }

 
 // @Input() avail:String = " ";
   


  ngOnInit(): void {
  } 

     
}

   
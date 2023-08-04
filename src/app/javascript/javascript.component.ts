import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit{ 

  constructor() {}

  menu: any = [
        {name: "Variables", path: 'variables'},
        {name: "Objects", path: 'objects'},
        {name: "Statements", path: 'statements'}
  ] 

  ngOnInit(): void {
    
  }

}

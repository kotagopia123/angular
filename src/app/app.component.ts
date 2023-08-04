import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core'
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'sample-app';

  data: string="login";
  sample: string = "forward";
  @ViewChild(HeaderComponent) headerComponent = HeaderComponent;

  constructor() {} 

  i: number=0;
  Increment() {
    this.data = 'logout'+ ++this.i;
  } 

   changeData() {
   this.sample = "Example"
   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    
  }
}

import { NgModule ,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HtmlComponent } from './html.component';
import { IntroComponent } from './intro/intro.component';
import { BasicsComponent } from './basics/basics.component';


const routes: Routes = [{
  path: '',
  component: HtmlComponent,
  children: [ 
        {path: '', redirectTo: 'default', pathMatch: 'full'},
        {path: "default", component: DefaultComponent,title: 'Html Default'},
        {path: 'intro', component: IntroComponent,title: 'Html Intro'}, 
        {path: 'basics', component: BasicsComponent,title: 'Html Basics'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule implements OnInit { 

  constructor() {}

  ngOnInit() {

  }

} 
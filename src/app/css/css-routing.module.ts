import { NgModule ,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { SelectorsComponent } from './selectors/selectors.component';


const routes: Routes = [{
  path: '',
  component: CssComponent,
  children: [ 
        {path: '', redirectTo: 'introduction', pathMatch: 'full'},
        {path: 'introduction', component: IntroductionComponent, title : 'CSS Intro'},
        {path: 'syntax' , component: SyntaxComponent,title: 'CSS Syntax'},
        {path: 'selectors',  component: SelectorsComponent, title: 'CSS Selectors'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule implements OnInit { 

  constructor() {}

  ngOnInit() {

  }
} 
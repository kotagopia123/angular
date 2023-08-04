import { NgModule ,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionsComponent } from './introductions/introductions.component';
import { SelectComponent } from './select/select.component';
import { CommentsComponent } from './comments/comments.component';
import { SqlComponent } from './sql.component';


const routes: Routes = [{
  path: '',
  component: SqlComponent,
  children: [ 
        {path: '', redirectTo: 'introductions', pathMatch: 'full'},
        {path: 'introductions',component: IntroductionsComponent ,title: 'SQL intro'},
        {path: 'select', component: SelectComponent, title: 'SQL select'},
        {path: 'comment', component: CommentsComponent, title: 'SQL comment'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  SqlRoutingModule implements OnInit { 

  constructor() {}

  ngOnInit() {

  }
} 
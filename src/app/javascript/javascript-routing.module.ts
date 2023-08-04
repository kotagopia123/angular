import { NgModule ,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { ObjectsComponent } from './objects/objects.component';
import { StatementsComponent } from './statements/statements.component';
import { JavascriptComponent } from './javascript.component';


const routes: Routes = [{
  path: '',
  component: JavascriptComponent,
  children: [ 
        {path: '', redirectTo: 'variables', pathMatch: 'full'},
        {path: 'variables', component: VariablesComponent, title : 'JS Variables'},
        {path: 'objects', component: ObjectsComponent, title: 'JS Objects'},
        {path: 'statements', component: StatementsComponent, title: 'JS statements'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule implements OnInit { 

  constructor() {}

  ngOnInit() {

  }
} 
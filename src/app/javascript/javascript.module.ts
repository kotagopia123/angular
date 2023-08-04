import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VariablesComponent } from './variables/variables.component';
import { ObjectsComponent } from './objects/objects.component';
import { StatementsComponent } from './statements/statements.component';
import { JavaScriptRoutingModule } from './javascript-routing.module';



@NgModule({
  declarations: [
    JavascriptComponent,
    VariablesComponent,
    ObjectsComponent,
    StatementsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    JavaScriptRoutingModule
  ],

  exports: [JavascriptComponent]
})
export class JavascriptModule { }

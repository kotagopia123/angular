import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html.component';
import { DefaultComponent } from './default/default.component';
import { IntroComponent } from './intro/intro.component';
import { BasicsComponent } from './basics/basics.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HtmlRoutingModule } from './html-routing.module';
import { CustomDirective } from '../Directives/custom.directive';



@NgModule({
  declarations: [
    HtmlComponent,
    DefaultComponent,
    IntroComponent,
    BasicsComponent,CustomDirective
  ],
  imports: [
    CommonModule ,
    RouterModule,
    SharedModule,
    HtmlRoutingModule
  ],

  exports: [HtmlComponent]
})
export class HtmlModule { }

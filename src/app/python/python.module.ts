import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonRoutingModule } from './python-routing.module';
import { PythonComponent } from './python.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    PythonComponent,
    IntroComponent,
    SyntaxComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    PythonRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PythonModule { }

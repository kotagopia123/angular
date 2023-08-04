import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponent } from './sql.component';
import { IntroductionsComponent } from './introductions/introductions.component';
import { CommentsComponent } from './comments/comments.component';
import { SelectComponent } from './select/select.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SqlRoutingModule } from './sql-routing.module';



@NgModule({
  declarations: [
    SqlComponent,
    IntroductionsComponent,
    CommentsComponent,
    SelectComponent
  ],
  imports: [
    CommonModule ,
    RouterModule,
    SharedModule,
    SqlRoutingModule
    ],

  exports: [SqlComponent]
})
export class SqlModule { }

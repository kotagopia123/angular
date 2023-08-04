import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CssRoutingModule } from './css-routing.module';



@NgModule({
  declarations: [
    CssComponent,
    IntroductionComponent,
    SyntaxComponent,
    SelectorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CssRoutingModule
  ],

   exports: [CssComponent]
})
export class CssModule { }

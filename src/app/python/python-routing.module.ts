import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonComponent } from './python.component';
import { IntroComponent } from './intro/intro.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [{ 
  path: '', 
  component: PythonComponent,
  children: [ 
    {path: '', redirectTo: 'intro', pathMatch: 'full'},
    {path:'intro', component: IntroComponent, title: 'python intro'},
    {path: 'syntax', component: SyntaxComponent, title: 'python syntax'},
    {path: 'comments', component: CommentsComponent, title : 'python commnet'}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonRoutingModule { }

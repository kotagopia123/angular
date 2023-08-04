import { NgModule ,OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponents } from './forms/login/login.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
 }, {
     path: "login",
     component: LoginComponents,
     title: 'login'
 }, 
    {
     path: "html",
    // component: HtmlComponent,
    // title: 'Html tutorial',

    //  children: [
    //    {path: "default", component: DefaultComponent,title: 'Html Default'},
    //     { path: 'intro', component: IntroComponent,title: 'Html Intro'}, 
    //     { path: 'basics', component: BasicsComponent,title: 'Html Basics'}
    //  ]
    
   loadChildren: () => import('./html/html.module').then(m => m.HtmlModule)

   }, {
      path: 'css',
      // component: CssComponent,
      // title: "CSS tutorial",

      // children: [
      //   {path: 'introduction', component: IntroductionComponent, title : 'CSS Intro'},
      //   {  path: 'syntax' , component: SyntaxComponent,title: 'CSS Syntax'},
      //   {path: 'selectors',  component: SelectorsComponent, title: 'CSS Selectors'}
      // ] 

      loadChildren: () => import('./css/css.module').then(m => m.CssModule)
 }, {
      path: 'js',
      // component: JavascriptComponent,
      // title: "JavaScript Tutorial",
    
      // children: [
      //   {path: 'variables', component: VariablesComponent, title : 'JS Variables'},
      //   {path: 'objects', component: ObjectsComponent, title: 'JS Objects'},
      //   {path: 'statements', component: StatementsComponent, title: 'JS statements'}
      // ]
loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)

 }, {
      path: 'sql',
      // component: SqlComponent,
      // title: 'SQL tutorial',

      // children: [
      //   {path: 'introductions',component: IntroductionsComponent ,title: 'SQL intro'},
      //   {path: 'select', component: SelectComponent, title: 'SQL select'},
      //   {path: 'comment', component: CommentsComponent, title: 'SQL comment'}
      // ] 

      loadChildren: () => import('./sql/sql.module').then(m => m.SqlModule)
 } , 

     { path: 'python', 

    loadChildren: () => import('./python/python.module').then(m => m.PythonModule) },


     {path: 'users', component: UsersListComponent ,title: "users list" },
     {path: 'users/:id', component: UserDetailsComponent ,title: "users list"},
     { path: '**', component: PageNotFoundComponent, title: 'Page Not Found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit { 

  constructor() {}

  ngOnInit() {

  }
} 
import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RegisterComponent } from './forms/register/register.component';
import { LoginComponents } from './forms/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,UserComponent,UsersListComponent, PageNotFoundComponent, UserDetailsComponent, RegisterComponent,
    LoginComponents
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

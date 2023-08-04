import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponents implements OnInit{
  loginForm!: FormGroup;

   constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) {}
    
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(6)],
       [CustomValidators.userNameValidator(this.userservice)]),
      password: new FormControl('', [Validators.required, CustomValidators.passwordValidation]),
      rememberMe: new FormControl(false)
    });
    const loginData = {userName: 'test123', password: 'test123', rememberMe: true};
  }  

  getLoginFormControl(key: string): any {
    return this.loginForm.get(key);
  } 

  login() {
    if(this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}

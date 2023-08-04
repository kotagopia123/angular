// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { CustomValidators } from './custom-validators';
// import { UserService } from 'src/app/services/user.service';

// @Component({
//   selector: 'app-reactive-forms',
//   templateUrl: './reactive-forms.component.html',
//   styleUrls: ['./reactive-forms.component.scss']
// })
// export class ReactiveFormsComponent implements OnInit {
 
//  loginForm!: FormGroup;

//   constructor(private fb:FormBuilder, private userservice: UserService) {} 

//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       userName: new FormControl ('', [Validators.required, Validators.minLength(6)],
//       [CustomValidators.userNameValidator(this.userservice)]),
//       passWord: new FormControl ('',[Validators.required, CustomValidators.passwordValidation]),
//       rememberme: new FormControl(false)
//    });
//    const loginData = {userName: 'test123', password: 'test123', rememberMe: true};
//   }
// }

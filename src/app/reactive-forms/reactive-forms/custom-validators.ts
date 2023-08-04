import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { UserService } from "src/app/services/user.service";








export class CustomValidators {
    static passwordValidation(control: AbstractControl): ValidationErrors | null {
        if(control?.value.trim()) {
            const pwd = control.value.trim();
            if(pwd.length < 8) {
                return {invalidPwd: true};
            }
        }
        return  null;
    }

    static userNameValidator(userservice: UserService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return userservice
            .checkIfUsernameExists(control.value)
            .pipe(
                map((result: boolean) =>
                result ? { usernameAlreadyExists: true } : null 
                )
            );
        };
        }
}
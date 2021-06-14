import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const registerValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null  => {
    const password = control.get('password');
    const rePassword = control.get('rePassword');
    return password.value !== rePassword.value ? {passwordNotMatch: true} : null;
}

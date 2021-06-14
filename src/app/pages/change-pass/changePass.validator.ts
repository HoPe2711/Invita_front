import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const changePassValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null  => {
    const password = control.get('newPassword');
    const rePassword = control.get('verifyNewPassword');
    return password.value !== rePassword.value ? {passwordNotMatch: true} : null;
}

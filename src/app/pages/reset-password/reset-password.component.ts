import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {registerValidator} from '../register-page/register.validators';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: [
        './reset-password.component.css',
        '../../shared/authpagestyle/vendor/bootstrap/css/bootstrap.min.css',
        '../../shared/authpagestyle/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
        '../../shared/authpagestyle/vendor/animate/animate.css',
        '../../shared/authpagestyle/vendor/css-hamburgers/hamburgers.min.css',
        '../../shared/authpagestyle/vendor/animsition/css/animsition.min.css',
        '../../shared/authpagestyle/vendor/select2/select2.min.css',
        '../../shared/authpagestyle/vendor/daterangepicker/daterangepicker.css',
        '../../shared/authpagestyle/css/util.css',
        '../../shared/authpagestyle/css/main.css'
    ]
})
export class ResetPasswordComponent implements OnInit {

    isLoading: Boolean = false;

    resetPassForm = new FormGroup({
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]),
        rePassword: new FormControl('', [
            Validators.required,
        ])
    }, {
        validators: registerValidator
    });

    get password() {
        return this.resetPassForm.get('password');
    }

    get rePassword() {
        return this.resetPassForm.get('rePassword');
    }

    onSubmit = () => {
        this.isLoading = true;
        this.route.queryParams.subscribe(params => {
            if (params['token']) {
                const {password, rePassword} = this.resetPassForm.value;
                const token = params['token'];
                this.authService.resetPassword(
                    token, password, rePassword).subscribe(
                    data => {
                        this.router.navigate(['login']).then( () => {
                            this._snackBar.open('Reset Password Successfully', 'Confirm', {
                                duration: 2000
                            });
                        });
                        this.resetPassForm.reset();
                        this.isLoading = false;
                    },
                    err => {
                        this.isLoading = false;
                    }
                )
            } else {
                this._snackBar.open('You are not click the link sent to your email', 'Confirm', {
                    duration: 2000
                });
            }
        });
    }

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) {

    }

    ngOnInit(): void {
    }
}

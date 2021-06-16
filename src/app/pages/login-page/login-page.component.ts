import {Component, OnInit} from '@angular/core';

import {LoginInfo} from '../../models/login-info';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: [
            './login-page.component.css',
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
    export class LoginPageComponent implements OnInit {

        model = new LoginInfo('', '');

        isLoading: Boolean = false;

    onSubmit = () => {
        this.isLoading = true;
        this.authService.login(this.model.username, this.model.password).subscribe(
            (observer: any) => {
                console.log(observer);
                localStorage.setItem('token', `${observer.type}${observer.token}`);
                localStorage.setItem('roles', `${observer.roles}`);
                this.router.navigate(['document-management']).then(r => console.log(r));
                this.isLoading = false;
            },
            (error) => {
                console.log('Error');
                this._snack.open(error.error.status.message, 'Close', {
                    duration: 2000
                });
                this.isLoading = false;
            }
        );
    }

    constructor(
        private authService: AuthService,
        private router: Router,
        private _snack: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigate(['']).then(r => console.log(r));
        }
    }

}

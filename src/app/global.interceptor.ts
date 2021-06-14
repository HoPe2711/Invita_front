import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpHeaders, HttpClient
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tap} from 'rxjs/operators';
import {AuthService} from './services/auth.service';



@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private http: HttpClient,
        private _snackbar: MatSnackBar,
        private authService: AuthService
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const newHeader = new HttpHeaders({
            'Authorization': `${localStorage.getItem('token')}`,
        });
        request = request.clone({headers: newHeader});
        return next.handle(request).pipe(
            tap(
                // Succeeds when there is a response; ignore other events
                event => {
                    console.log('Receive Response')
                },
                // Operation failed; error is an HttpErrorResponse
                error => {
                    if (error.status === 401) {
                        if (error.error.message === 'Error: Unauthorized') {
                            window.location.reload();
                            return this.authService.refresh(`${localStorage.getItem('refreshToken')}`).pipe(
                                tap(
                                    (event) => {
                                        // @ts-ignore
                                        const type = event.data.type;
                                        // @ts-ignore
                                        const token = event.data.token;
                                        localStorage.setItem('token', `${type}${token}`);
                                    },
                                    // tslint:disable-next-line:no-shadowed-variable
                                    error => {
                                            this._snackbar.open('Something went wrong', 'Close', {
                                                duration: 2000
                                            })
                                            this.authService.logout(localStorage.getItem('refreshToken')).subscribe(data => {
                                                console.log(data);
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('refreshToken');
                                                this.router.navigate(['login']).then(r => console.log(r));
                                            })
                                    }
                                )
                            ).subscribe(e => console.log(e))
                        }
                    }
                }
            )
        );
    }
}

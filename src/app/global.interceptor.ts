import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tap} from 'rxjs/operators';


@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private http: HttpClient,
        private _snackbar: MatSnackBar,
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
                    console.log('Receive Response');
                },
                // Operation failed; error is an HttpErrorResponse
                error => {
                        if (error.error.status === 401) {
                        this._snackbar.open('Expired session', 'Close', {
                            duration: 2000
                        })
                        localStorage.removeItem('token');
                        localStorage.removeItem('roles');
                        this.router.navigate(['login']).then(r => console.log(r));
                     }
                }
                )
            )
    }
}

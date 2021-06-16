import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// tslint:disable-next-line:max-line-length
import {
  changePasswordEndpoint,
  host,
  loginEndpoint,
  logoutEndpoint,
  recoverPasswordEndpoint,
  registerEndpoint,
  resetPasswordEndPoint,
  verifyRegisterEndpoint
} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient
  ) { }

  login = (username, password): Observable<any[]> => {
    const url = `${host}${loginEndpoint}`;
    return this.http.post(url, {username, password}).pipe(
        pluck('data')
    )
  }

  logout = (token) => {
    const url = `${host}${logoutEndpoint}`;
    return this.http.post(url, {token});
  }

  register = ({username, password, firstName, lastName, email, retypePassword}): Observable<any[]> => {
    const url = `${host}${registerEndpoint}`;
    return this.http.post(url, {username, password, firstName, lastName, email, retypePassword}).pipe(
        pluck('data')
    )
  }

  changePassword = (oldPassword, newPassword, retypeNewPassword): Observable<any[]> => {
    const url = `${host}${changePasswordEndpoint}`;
    return this.http.post(url, {oldPassword, newPassword, retypeNewPassword}).pipe(
        pluck('data')
    )
  }

  confirmEmail = (token) => {
    const url = `${host}${verifyRegisterEndpoint}?token=${token}`;
    return this.http.get(url);
  }

  resetPassword = (token, password, rePassword) => {
    const url = `${host}${resetPasswordEndPoint}?token=${token}`;
    return this.http.post(url, {password, retypePassword: rePassword});
  }

  sendEmailRecoverPassword = (email) => {
    const url = `${host}${recoverPasswordEndpoint}`;
    return this.http.post(url, {email});
  }
}

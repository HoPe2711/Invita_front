import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {deleteUserEndpoint, externalContext, getAllUserEndpoint, host} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  getAllUser = (): Observable<any[]> => {
    const url = `${host}${getAllUserEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listApplicationUser')
    )
  }

  deleteUser = (id) => {
    const url = `${host}${deleteUserEndpoint}/${id}`;
    return this.http.delete(url);
  }
}

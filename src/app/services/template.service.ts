import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  externalContext,
  getAllTemplateEndpoint,
  host,
  deleteTemplateEndpoint,
  createTemplateEndpoint, getSingleTemplateEndpoint, updateSingleTemplateEndpoint, getChildTemplateEndpoint, getParentTemplateEndpoint
} from '../constant/called-service.const';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
      private http: HttpClient
  ) { }

  getAllTemplate = (): Observable<any[]> => {
    const url = `${host}${externalContext}${getAllTemplateEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listTemplate')
    );
  }

  getChildTemplate = (id): Observable<any[]> => {
    const url = `${host}${externalContext}${getChildTemplateEndpoint}/${id}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listFeedback')
    );
  }

  getParentTemplate = (): Observable<any[]> => {
    const url = `${host}${externalContext}${getParentTemplateEndpoint}`;
    return this.http.get(url).pipe(
        pluck('data'),
        pluck('listTemplate')
    );
  }

  getSingleTemplate = (id): Observable<any> => {
    const url = `${host}${externalContext}${getSingleTemplateEndpoint}/${id}`;
    return this.http.get(url).pipe(
        pluck('data')
    );
  }

  updateSingleTemplate = (id, templateName, templateContent, parentId) => {
    const url = `${host}${externalContext}${updateSingleTemplateEndpoint}/${id}`;
    return this.http.put(url, {templateName, templateContent, parentId}).pipe(
        pluck('data')
    );
  }

  createTemplate = (templateName, templateContent, parentId): Observable<any> => {
    const url = `${host}${externalContext}${createTemplateEndpoint}`;
    return this.http.post(url, {templateName, templateContent, parentId}).pipe(
        pluck('data')
    );
  }

  deleteSingleTemplate = (id: string): Observable<any> => {
    const url = `${host}${externalContext}${deleteTemplateEndpoint}/${id}`;
    return this.http.delete(url).pipe(
        pluck('data')
    );
  }
}

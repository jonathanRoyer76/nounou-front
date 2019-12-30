import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from 'src/app/interfaces/person';
import { Observable } from 'rxjs';
import * as constants from '../../commons/constants';
import * as urls from '../../commons/urls';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private http: HttpClient) { }

    public add(p_person: IPerson): Observable<IPerson> {
        return this.http.post<IPerson>(
            `${urls.SERVER_FULL_PATH}/${urls.PERSONS_ADD}`,
            JSON.stringify(p_person),
            { headers: constants.GLOBAL_HEADERS });
    }
}

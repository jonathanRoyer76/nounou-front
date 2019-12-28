import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITypePerson } from 'src/app/interfaces/typePerson';
import { Observable } from 'rxjs';
import * as constants from '../../commons/constants';

@Injectable({
  providedIn: 'root'
})
export class TypesPersonService {

  constructor(
    private http: HttpClient) { }

    // public getAll(): Observable<ITypePerson[]> {
    //     return this.http.get<ITypePerson[]>(`${constants.SERVER_FULL_PATH}/${constants.TYPES_PERSON_GET_ALL}`);
    // }

    public getAll() {
      this.http.get(`${constants.SERVER_FULL_PATH}/${constants.TYPES_PERSON_GET_ALL}`).subscribe(data => console.log(data))
  }
}

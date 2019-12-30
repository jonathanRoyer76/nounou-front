import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITypePerson } from 'src/app/interfaces/typePerson';
import { Observable } from 'rxjs';
import * as urls from '../../commons/urls';

@Injectable({
  providedIn: 'root'
})
export class TypesPersonService {

  constructor(
    private http: HttpClient) { }

    public getAll() {
      this.http.get(`${urls.SERVER_FULL_PATH}/${urls.TYPES_PERSON_GET_ALL}`).subscribe(data => console.log(data))
  }
}

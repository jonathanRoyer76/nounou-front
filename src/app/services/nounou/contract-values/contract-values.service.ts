import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as urls from '../../../commons/urls';
import * as constants from '../../../commons/constants';
import { IDefaultContractValues } from 'src/app/interfaces/defaultContractValues';

@Injectable({
  providedIn: 'root'
})
export class ContractValuesService {

  constructor(
    private http: HttpClient) { }

    /**
     * Add new datas in DB for contract values
     * @param p_contractValues Object to add in DB
     */
    public addDefaultContractValues(p_contractValues: IDefaultContractValues): Observable<IDefaultContractValues> {
        const url = `${urls.SERVER_FULL_PATH}/${urls.CONTRACT_VALUES_ADD}`;
        return this.http.post<IDefaultContractValues>(url, p_contractValues, { headers: constants.GLOBAL_HEADERS });
    }

    public getLastContractValues(): Observable<IDefaultContractValues> {
        const url = `${urls.SERVER_FULL_PATH}/${urls.CONTRACT_VALUES_GET}`;
        return this.http.get<IDefaultContractValues>(url, { headers: constants.GLOBAL_HEADERS });
    }
}

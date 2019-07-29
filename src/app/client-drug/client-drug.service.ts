import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClientDrugModel } from './client-drug.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientDrugService {
  constructor(private http: HttpClient) {
  }

  addClientDrug(clientDrug: ClientDrugModel) {
    return this.http.post(environment.baseUrl + 'clientdrug/save', clientDrug);
  }
}

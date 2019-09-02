import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClientDrugModel } from './client-drug.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientDrugService {
  endpoint;

  constructor(private http: HttpClient) {
    this.endpoint = environment.baseUrl + 'clientdrugs';
  }

  addClientDrug(clientDrug: ClientDrugModel) {
    return this.http.post(this.endpoint, clientDrug);
  }

  getClientDrugs() {
    return this.http.get(this.endpoint);
  }

  updateClientDrug(clientDrug: ClientDrugModel, clientDrugId) {
    return this.http.put(`${this.endpoint}/${clientDrugId}`, clientDrug);
  }

  getClientDrugById(clientDrugId) {
    return this.http.get(this.endpoint + '/' + clientDrugId);
  }
}

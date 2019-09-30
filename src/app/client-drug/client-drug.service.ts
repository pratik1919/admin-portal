import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDrugModel } from './client-drug.model';
import { environment } from '../../environments/environment';
import { OktaAuthService } from '@okta/okta-angular';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientDrugService {
  endpoint;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    this.endpoint = environment.baseUrl + 'clientdrugs';
  }

  addClientDrug(clientDrug: ClientDrugModel) {
    return this.http.post(this.endpoint, clientDrug);
  }

  getClientDrugs() {
    // Somehow we get scope (this) issue if we simply specify function name
    return this.http.get(this.endpoint).pipe(map(result => this.mapResponseList.call(this, result)));
  }

  updateClientDrug(clientDrug: ClientDrugModel, clientDrugId) {
    const request = this.mapRequest(clientDrug);
    return this.http.put(`${this.endpoint}/${clientDrugId}`, request);
  }

  getClientDrugById(clientDrugId) {
    return this.http.get(this.endpoint + '/' + clientDrugId).pipe(map(this.mapResponse));
  }

  private mapResponseList(list) {
    return list.map(this.mapResponse);
  }

  private mapResponse(data) {
    return {
      clientDrugId: data.clientdrugid,
      clientId: data.clientid,
      ndc: data.ndc,
      brandName: data.brandname,
      genericName: data.genericname,
      strength: data.strength,
      strengthUnit: data.strengthunit,
      otc: data.otc,
      supply: data.supply,
      generic: data.generic,
      drugDescription: data.drugdescription,
    };
  }

  private mapRequest(data: ClientDrugModel) {
    return {
      clientid: data.clientId,
      ndc: data.ndc,
      brandname: data.brandName,
      genericname: data.genericName,
      strength: data.strength,
      strengthunit: data.strengthUnit,
      otc: data.otc,
      supply: data.supply,
      generic: data.generic,
      drugdescription: data.drugDescription
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientDrugService } from './client-drug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-drug',
  templateUrl: './client-drug.component.html',
  styleUrls: ['./client-drug.component.scss']
})
export class ClientDrugComponent implements OnInit {

  clientDrugs;
  isLoadingData = true;

  constructor(private clientDrugService: ClientDrugService, private router: Router) {
  }

  ngOnInit() {
    this.fetchClientDrugs();
  }

  fetchClientDrugs() {
    this.isLoadingData = true;
    this.clientDrugService.getClientDrugs()
      .subscribe((data) => this.clientDrugs = data);
  }
}

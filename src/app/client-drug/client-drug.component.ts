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

  formSubmitted: boolean = false;

  // Form group
  addClientDrugFormGroup: FormGroup;

  // Form controls
  ndc: FormControl;
  brandName: FormControl;
  genericName: FormControl;
  strength: FormControl;
  strengthUnit: FormControl;
  otc: FormControl;
  supply: FormControl;
  generic: FormControl;
  drugDescription: FormControl;

  constructor(private clientDrugService: ClientDrugService, private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.ndc = new FormControl('', [Validators.required]);
    this.brandName = new FormControl('');
    this.genericName = new FormControl('');
    this.strength = new FormControl('');
    this.strengthUnit = new FormControl('');
    this.otc = new FormControl('', [Validators.maxLength(1)]);
    this.supply = new FormControl('', [Validators.maxLength(1)]);
    this.generic = new FormControl('', [Validators.maxLength(1)]);
    this.drugDescription = new FormControl('');

    this.addClientDrugFormGroup = new FormGroup({
      ndc: this.ndc,
      brandName: this.brandName,
      genericName: this.genericName,
      strength: this.strength,
      strengthUnit: this.strengthUnit,
      otc: this.otc,
      supply: this.supply,
      generic: this.generic,
      drugDescription: this.drugDescription
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if(!this.addClientDrugFormGroup.valid) {
      return;
    }

    // API call to add client drug information
    this.clientDrugService.addClientDrug(this.addClientDrugFormGroup.value).subscribe((v) => this.router.navigate(['']));
  }

}

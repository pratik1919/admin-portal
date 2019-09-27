import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientDrugService } from '../client-drug.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client-drug',
  templateUrl: './add-client-drug.component.html',
  styleUrls: ['./add-client-drug.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddClientDrugComponent implements OnInit, OnChanges {

  @Input() isUpdate: boolean;
  @Input() prePopFormData: any;

  formSubmitted = false;

  // Form group
  addClientDrugFormGroup: FormGroup;

  // Form controls
  clientId: FormControl;
  ndc: FormControl;
  brandName: FormControl;
  genericName: FormControl;
  strength: FormControl;
  strengthUnit: FormControl;
  otc: FormControl;
  supply: FormControl;
  generic: FormControl;
  drugDescription: FormControl;

  formInitialized = false;

  // Tooltip info
  tooltips = {
    ndc: `A unique number and a universal product identifier for human drugs.`,
    otc: 'Should be one character long.',
    supply: 'Should be one character long.',
    generic: 'Should be one character long.'
  };

  constructor(private clientDrugService: ClientDrugService, private router: Router) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.clientId = new FormControl('', [Validators.required]);
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
      clientId: this.clientId,
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
    this.formInitialized = true;
  }

  private prePopData() {
    if(!this.formInitialized) {
      this.initializeForm();
    } else {
      this.clientId.setValue(this.prePopFormData.clientId);
      this.ndc.setValue(this.prePopFormData.ndc);
      this.brandName.setValue(this.prePopFormData.brandName);
      this.genericName.setValue(this.prePopFormData.genericName);
      this.strength.setValue(this.prePopFormData.strength);
      this.strengthUnit.setValue(this.prePopFormData.strengthUnit);
      this.otc.setValue(this.prePopFormData.otc);
      this.supply.setValue(this.prePopFormData.supply);
      this.generic.setValue(this.prePopFormData.generic);
      this.drugDescription.setValue(this.prePopFormData.drugDescription);
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if(!this.addClientDrugFormGroup.valid) {
      return;
    }

    if(this.isUpdate) {
      this.clientDrugService.updateClientDrug(this.addClientDrugFormGroup.value, this.prePopFormData.clientDrugId)
        .subscribe((v) => this.router.navigate(['/client-drug']));
    } else {
      // API call to add client drug information
      this.clientDrugService.addClientDrug(this.addClientDrugFormGroup.value).subscribe((v) => this.router.navigate(['/client-drug']));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "prePopFormData" changed
    if(changes.prePopFormData) {
      this.prePopData();
    }
  }

  getAddOrUpdateText() {
    return this.isUpdate ? 'Update' : 'Add';
  }

  cancelBtnClicked() {
    return this.router.navigate(['client-drug']);
  }
}

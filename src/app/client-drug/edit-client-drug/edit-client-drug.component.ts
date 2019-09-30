import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ClientDrugService } from '../client-drug.service';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-edit-client-drug',
  templateUrl: './edit-client-drug.component.html',
  styleUrls: ['./edit-client-drug.component.scss']
})
export class EditClientDrugComponent implements OnInit {

  clientDrug;

  constructor(private route: ActivatedRoute, private clientDrugService: ClientDrugService, private oktaAuth: OktaAuthService) {
  }

  ngOnInit() {
    this.clientDrug = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.clientDrugService.getClientDrugById(params.get('id'))
      )
    ).subscribe((data) => {
      this.clientDrug = data;
      console.log(data);
    });
  }
}

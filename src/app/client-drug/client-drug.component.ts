import { ClientDrugService } from './client-drug.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { OktaAuthService } from '@okta/okta-angular';

declare var $;

// @ts-ignore
@Component({
  selector: 'app-client-drug',
  templateUrl: './client-drug.component.html',
  styleUrls: ['./client-drug.component.scss']
})
export class ClientDrugComponent implements OnInit, AfterViewInit {
  clientDrugs;
  isLoadingData;

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(
    private clientDrugService: ClientDrugService,
    private router: Router,
    private oktaAuth: OktaAuthService
  ) {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 2,
      info: false,
      searching: true,
      lengthChange: false
    };
    this.fetchClientDrugs();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.rerender();
    }, 2000);
  }

  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function(index) {
        const column = this;
        if(column.header().innerHTML.toLowerCase() !== 'action') {
          const select = $(
            '<select onclick="event.stopPropagation()" style="width: 100%"><option value=""></option></select>'
          )
            .appendTo($('#search-filters td')[index])
            .on('change', function(e) {
              const val = $.fn.dataTable.util.escapeRegex($(this).val());

              column.search(val ? '^' + val + '$' : '', true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each((d, j) => {
              select.append('<option value="' + d + '">' + d + '</option>');
            });
        }
      });
    });
  }

  fetchClientDrugs() {
    this.isLoadingData = true;
    this.clientDrugService.getClientDrugs().subscribe(data => {
      this.clientDrugs = data;
      this.dtTrigger.next();
      this.isLoadingData = false;
    });
  }
}

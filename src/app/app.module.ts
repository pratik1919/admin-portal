import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import config from './okta.config';
import { ClientDrugComponent } from './client-drug/client-drug.component';
import { ClientDrugService } from './client-drug/client-drug.service';
import { AddClientDrugComponent } from './client-drug/add-client-drug/add-client-drug.component';
import { EditClientDrugComponent } from './client-drug/edit-client-drug/edit-client-drug.component';
import { DataTablesModule } from 'angular-datatables';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    router.navigate(['/login']);
  }
}, config);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    ClientDrugComponent,
    AddClientDrugComponent,
    EditClientDrugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: oktaConfig},
    ClientDrugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

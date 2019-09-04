import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';
import {ContentComponent} from './content/content.component';
import {ClientDrugComponent} from './client-drug/client-drug.component';
import { AddClientDrugComponent } from './client-drug/add-client-drug/add-client-drug.component';
import { EditClientDrugComponent } from './client-drug/edit-client-drug/edit-client-drug.component';

const routes: Routes = [
  {path: '', component: ContentComponent, canActivate: [OktaAuthGuard]},
  {path: 'login', component: LoginComponent},
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {path: 'client-drug', component: ClientDrugComponent, canActivate: [OktaAuthGuard]},
  {path: 'client-drug/add', component: AddClientDrugComponent, canActivate: [OktaAuthGuard]},
  {path: 'client-drug/edit/:id', component: EditClientDrugComponent, canActivate: [OktaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

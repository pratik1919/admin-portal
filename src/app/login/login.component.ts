import { Component, OnInit } from '@angular/core';
import config from '../okta.config';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signIn: any;

  constructor() {
    this.signIn = new OktaSignIn({
      baseUrl: config.issuer.split('/oauth2')[0],
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      i18n: {
        en: {
          'primaryauth.title': 'Log in'
        }
      },
      authParams: {
        // responseType: ['id_token', 'token'],
        issuer: config.issuer,
        display: 'page',
        scopes: config.scope.split(' '),
        pkce: true
      }
    });
  }

  ngOnInit() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {},
      err => {
        throw err;
      }
    );
  }
}

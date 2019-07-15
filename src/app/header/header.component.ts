import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../assets/styles/scss/components/_header.scss']
})
export class HeaderComponent implements OnInit {

  @Output() signOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  signOutClicked() {
    this.signOut.emit();
  }

}

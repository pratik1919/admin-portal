import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDrugComponent } from './client-drug.component';

describe('ClientDrugComponent', () => {
  let component: ClientDrugComponent;
  let fixture: ComponentFixture<ClientDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

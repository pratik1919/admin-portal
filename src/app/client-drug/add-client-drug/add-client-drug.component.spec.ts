import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientDrugComponent } from './add-client-drug.component';

describe('AddClientDrugComponent', () => {
  let component: AddClientDrugComponent;
  let fixture: ComponentFixture<AddClientDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

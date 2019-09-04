import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientDrugComponent } from './edit-client-drug.component';

describe('EditClientDrugComponent', () => {
  let component: EditClientDrugComponent;
  let fixture: ComponentFixture<EditClientDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClientDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PabellonesComponent } from './pabellones.component';

describe('PabellonesComponent', () => {
  let component: PabellonesComponent;
  let fixture: ComponentFixture<PabellonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PabellonesComponent]
    });
    fixture = TestBed.createComponent(PabellonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

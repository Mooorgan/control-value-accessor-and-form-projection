import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepComponent } from './form-step.component';

describe('FormStepComponent', () => {
  let component: FormStepComponent;
  let fixture: ComponentFixture<FormStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStepComponent]
    });
    fixture = TestBed.createComponent(FormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContentProjectionComponent } from './form-content-projection.component';

describe('FormContentProjectionComponent', () => {
  let component: FormContentProjectionComponent;
  let fixture: ComponentFixture<FormContentProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContentProjectionComponent]
    });
    fixture = TestBed.createComponent(FormContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

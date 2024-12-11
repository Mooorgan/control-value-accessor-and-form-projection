import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayContainerComponent } from './form-array-container.component';

describe('FormArrayContainerComponent', () => {
  let component: FormArrayContainerComponent;
  let fixture: ComponentFixture<FormArrayContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormArrayContainerComponent]
    });
    fixture = TestBed.createComponent(FormArrayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

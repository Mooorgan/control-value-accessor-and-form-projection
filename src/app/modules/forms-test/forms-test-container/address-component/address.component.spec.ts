import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponentComponent } from './address.component';

describe('AddressComponentComponent', () => {
  let component: AddressComponentComponent;
  let fixture: ComponentFixture<AddressComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponentComponent],
    });
    fixture = TestBed.createComponent(AddressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

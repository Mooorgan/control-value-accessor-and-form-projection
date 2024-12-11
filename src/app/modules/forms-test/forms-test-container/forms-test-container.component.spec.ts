import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTestContainerComponent } from './forms-test-container.component';

describe('FormsTestContainerComponent', () => {
  let component: FormsTestContainerComponent;
  let fixture: ComponentFixture<FormsTestContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTestContainerComponent]
    });
    fixture = TestBed.createComponent(FormsTestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

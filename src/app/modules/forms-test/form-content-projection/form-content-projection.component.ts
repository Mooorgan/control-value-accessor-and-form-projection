import { Component, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-content-projection',
  templateUrl: './form-content-projection.component.html',
  styleUrls: ['./form-content-projection.component.scss'],
})
export class FormContentProjectionComponent {
  private fb = inject(FormBuilder);

  protected contentForm = this.fb.group({
    price: [1200],
  });
}

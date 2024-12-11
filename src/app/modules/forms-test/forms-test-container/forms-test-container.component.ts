import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-test-container',
  templateUrl: './forms-test-container.component.html',
  styleUrls: ['./forms-test-container.component.scss'],
})
export class FormsTestContainerComponent {
  private fb = inject(FormBuilder);
  protected formContainer = this.fb.group({
    name: [''],
    age: [''],
    address: [{ address: '', country: '', zip: '', city: '' }],
    company: [
      // { companyName: '', department: '', address: '', city: '', phone: '' },
      { companyName: '' },
    ],
  });

  protected submitForm() {
    console.log(this.formContainer);
  }
}

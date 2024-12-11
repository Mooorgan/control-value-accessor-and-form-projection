import { Component, forwardRef, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-company-component',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyComponent),
      multi: true,
    },
  ],
})
export class CompanyComponent implements ControlValueAccessor {
  private fb = inject(FormBuilder);

  protected companyForm = this.fb.group({
    companyName: [''],
    department: [''],
    address: [''],
    city: [''],
    phone: [''],
  });

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}

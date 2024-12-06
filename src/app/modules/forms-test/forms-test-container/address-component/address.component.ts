import { Component, forwardRef, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
})
export class AddressComponent implements ControlValueAccessor {
  private fb = inject(FormBuilder);

  private onTouchedCallBack: () => void = () => {};
  private onChangeCallBack: () => void = () => {};

  protected addressForm = this.fb.group({
    address: [''],
    country: [''],
    zip: [''],
    city: [''],
  });

  writeValue(obj: {}): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}

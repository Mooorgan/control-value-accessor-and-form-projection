import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss'],
})
export class FormStepperComponent {
  @Input({ required: true })
  formContainer!: FormGroup;

  @ViewChild(FormGroupDirective, { static: true })
  // @ViewChild(FormGroupDirective)
  containerFormDirective!: FormGroupDirective;

  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  get form() {
    console.log('FormGroupDirective', this.containerFormDirective);
    return this.containerFormDirective;
  }
}

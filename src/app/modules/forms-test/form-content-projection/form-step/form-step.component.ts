import {
  Component,
  inject,
  Injector,
  OnInit,
  Optional,
  Self,
  Type,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';
import { FormsTestContainerComponent } from '../../forms-test-container/forms-test-container.component';
import { AddressComponent } from '../../forms-test-container/address-component/address.component';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (injector: Injector) => {
        const formStepper = injector.get(FormStepperComponent);
        console.log(formStepper);
        return formStepper.form;
      },
      deps: [Injector],
    },
    // {
    //   provide: ControlContainer,
    //   useFactory: (
    //     formStepperComponent: FormStepperComponent,
    //parameter here is useless, deps property is where the dependency injection happens
    //     d: AddressComponent
    //   ) => {
    //     console.log(formStepperComponent, d);
    //     return formStepperComponent.form;
    //   },
    //   deps: [FormStepperComponent],
    // Address component is optional
    // deps: [FormStepperComponent, [new Optional(), AddressComponent]],
    // There is also a self class, I don't know how this can be used
    // deps: [FormStepperComponent, [new Self(), AddressComponent]],
    // Null injector is thrown because dependency injection can't find AddressComponent
    // deps: [FormStepperComponent, AddressComponent],
    // },
  ],
})
export class FormStepComponent implements OnInit {
  private controlContainer = inject(ControlContainer);
  ngOnInit(): void {
    console.log(this.controlContainer);
  }
}

import { Component, inject, Injector, OnInit, Type } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';
import { FormsTestContainerComponent } from '../../forms-test-container/forms-test-container.component';

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
  ],
})
export class FormStepComponent implements OnInit {
  private controlContainer = inject(ControlContainer);
  ngOnInit(): void {
    console.log(this.controlContainer);
  }
}

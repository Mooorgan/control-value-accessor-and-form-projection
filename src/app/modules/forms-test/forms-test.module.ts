import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsTestContainerComponent } from './forms-test-container/forms-test-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsTestRoutingModule } from './forms-test-routing.module';
import { AddressComponent } from './forms-test-container/address-component/address.component';
import { CompanyComponent } from './forms-test-container/company-component/company.component';
import { FormContentProjectionComponent } from './form-content-projection/form-content-projection.component';
import { FormStepComponent } from './form-content-projection/form-step/form-step.component';
import { FormStepperComponent } from './form-content-projection/form-stepper/form-stepper.component';

@NgModule({
  declarations: [
    FormsTestContainerComponent,
    AddressComponent,
    CompanyComponent,
    FormContentProjectionComponent,
    FormStepComponent,
    FormStepperComponent,
  ],
  imports: [CommonModule, FormsTestRoutingModule, ReactiveFormsModule],
})
export class FormsTestModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsTestContainerComponent } from './forms-test-container/forms-test-container.component';
import { FormContentProjectionComponent } from './form-content-projection/form-content-projection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'composite-control-value-accessor',
    pathMatch: 'full',
  },
  {
    path: 'composite-control-value-accessor',
    component: FormsTestContainerComponent,
  },
  {
    path: 'content-projection-form',
    component: FormContentProjectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsTestRoutingModule {}

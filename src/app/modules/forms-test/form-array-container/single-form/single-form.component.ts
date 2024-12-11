import { Component, inject, OnInit, SkipSelf } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormBuilder,
} from '@angular/forms';
import { FormArrayService } from '../services/form-array.service';
import { take, tap } from 'rxjs';
import { PassengerFormArray } from '../passenger.type';

@Component({
  selector: 'app-single-form',
  templateUrl: './single-form.component.html',
  styleUrls: ['./single-form.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(FormArrayName, { skipSelf: true }),
    },
  ],
})
export class SingleFormComponent implements OnInit {
  private formService = inject(FormArrayService);
  private fb = inject(FormBuilder);
  protected index!: number;

  protected passengerControl$ = this.formService.totalPassengers$.pipe(
    take(1),
    tap(() => {
      this.index = (this.passengersForm.control as FormArray).length;
      console.log((this.passengersForm.control as FormArray).length);
      const passengerDetails = this.fb.group({
        firstName: [''],
        lastName: [''],
        boardingPlace: [''],
        deboardingPlace: [''],
      });
      (this.passengersForm.control as PassengerFormArray).push(
        passengerDetails
      );
    })
  );

  ngOnInit(): void {}
  protected passengersForm = inject(ControlContainer);
}

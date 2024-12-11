import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormArrayService } from './services/form-array.service';
import { tap } from 'rxjs';
import { PassengerFormArray } from './passenger.type';

@Component({
  selector: 'app-form-array-container',
  templateUrl: './form-array-container.component.html',
  styleUrls: ['./form-array-container.component.scss'],
  providers: [FormArrayService],
})
export class FormArrayContainerComponent implements OnInit {
  private formService = inject(FormArrayService, { self: true });

  protected totalPassengers$ = this.formService.totalPassengers$;
  ngOnInit(): void {
    // this.formService.totalPassengers$
    //   .pipe(
    //     tap((v) => {
    //       console.log(v);
    //     })
    //   )
    //   .subscribe();
  }
  protected fb = inject(FormBuilder);
  protected passengersForm = this.fb.group({
    origin: [''],
    destination: [''],
    passengers: this.fb.array([]),
  });

  get passergerLists() {
    return this.passengersForm.controls
      .passengers as unknown as PassengerFormArray;
  }

  addPassenger() {
    this.formService.addPassenger();
    // const passengerDetails = this.fb.group({
    //   firstName: [''],
    //   lastName: [''],
    //   boardingPlace: [''],
    //   deboardingPlace: [''],
    // });
    // this.passergerLists.push(passengerDetails);
  }

  submitForm() {
    console.log(this.passengersForm.value);
  }
}

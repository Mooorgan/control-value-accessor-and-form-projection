import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type PassengerFormArray = FormArray<
  FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    boardingPlace: FormControl<string | null>;
    deboardingPlace: FormControl<string | null>;
  }>
>;

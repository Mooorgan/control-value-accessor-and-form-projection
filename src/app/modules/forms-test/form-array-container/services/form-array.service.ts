import { Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, scan, Subject, takeUntil } from 'rxjs';

type PassengerLiteral = 'passenger';

@Injectable()
// @Directive()
export class FormArrayService implements OnDestroy {
  private totalPassengersSubj = new ReplaySubject<PassengerLiteral[]>(1);
  readonly totalPassengers$ = this.totalPassengersSubj.asObservable();

  // private passengersControlSubj=new Subject<number[]>();
  // passengersControl$=this.passengersControlSubj.asObservable();
  private addPassengerControlSubj = new Subject<PassengerLiteral>();
  private addPassengerControl$ = this.addPassengerControlSubj.asObservable();

  addPassenger() {
    this.addPassengerControlSubj.next('passenger');
  }

  private totalCalcPassengersSubscription = this.addPassengerControl$
    .pipe(
      scan((acc, curr) => {
        console.log('add passenger control');
        return [...acc, curr];
      }, [] as PassengerLiteral[])
    )
    .subscribe((v) => {
      this.totalPassengersSubj.next(v);
    });

  ngOnDestroy(): void {
    this.totalCalcPassengersSubscription.unsubscribe();
  }
}

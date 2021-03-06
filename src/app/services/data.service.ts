import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tickets } from '../interfaces/tickets';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Tickets[] = [
    { ticket: 'Ticket1', label: 'label1,label2', status: 'pending' },
    { ticket: 'Ticket2', label: 'label2', status: 'pending' },
    { ticket: 'Ticket3', label: 'label3', status: 'pending' },
    { ticket: 'Ticket4', label: 'label4', status: 'pending' },
  ];
  dataListSBJ$: Subject<any> = new Subject();
  dataListOBS$: Observable<any> = this.dataListSBJ$.asObservable();

  constructor() {}

  tableFilter(input: string): Tickets[] {
    if (!input) {
      return [...this.data];
    } else {
      const matches = [...this.data].filter((data) => data.label === input);
      if (matches.length) {
        return [...matches];
      } else {
        return [
          {
            ticket: 'None found',
            label: 'None found',
            status: 'None found',
          },
        ];
      }
    }
  }
}

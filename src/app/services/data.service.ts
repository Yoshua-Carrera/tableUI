import { Injectable } from '@angular/core';
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

  constructor() {}
}

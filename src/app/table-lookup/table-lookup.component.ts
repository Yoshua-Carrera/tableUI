import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { Tickets } from '../interfaces/tickets';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-lookup',
  templateUrl: './table-lookup.component.html',
  styleUrls: ['./table-lookup.component.sass'],
})
export class TableLookupComponent implements OnInit {
  tableData!: Tickets[];
  dataList: string[] = [];
  @ViewChild('inputBox', { static: true }) inputBox!: ElementRef;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.tableData = [...this.data.data];
    this.dataList = this.tableData.map(data => data.label) 
    console.log(this.inputBox);
    fromEvent(this.inputBox.nativeElement, 'input')
      .pipe(
        tap((_) => {
          const input = this.inputBox.nativeElement.value;
          this.tableData = [...this.data.tableFilter(input)]
        })
      )
      .subscribe();
  }
}

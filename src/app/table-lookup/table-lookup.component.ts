import { Component, OnInit } from '@angular/core';
import { Tickets } from '../interfaces/tickets';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-lookup',
  templateUrl: './table-lookup.component.html',
  styleUrls: ['./table-lookup.component.sass']
})
export class TableLookupComponent implements OnInit {
  tableData!: Tickets[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.tableData = [...this.data.data]
  }

}

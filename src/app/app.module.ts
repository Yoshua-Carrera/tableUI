import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableLookupComponent } from './table-lookup/table-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    TableLookupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

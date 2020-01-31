import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LookupComponent } from './lookup/lookup.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
   declarations: [
      AppComponent,
      LookupComponent,
      HistoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

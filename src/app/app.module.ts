import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LookupComponent } from './lookup/lookup.component';
import { HistoryComponent } from './history/history.component';
import { SearchService } from './_services/search.service';

@NgModule({
   declarations: [
      AppComponent,
      LookupComponent,
      HistoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      SearchService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

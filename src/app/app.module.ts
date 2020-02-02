import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LookupComponent } from './lookup/lookup.component';
import { HistoryComponent } from './history/history.component';
import { SearchService } from './_services/search.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';

@NgModule({
   declarations: [
      AppComponent,
      LookupComponent,
      HistoryComponent,
      SearchResultComponent,
      SearchComponent
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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  model: any = {};
  @Output() gotResult = new EventEmitter();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  // this function sends the search item to the DB (through the server)
  // gets the result and sends it to the parent search component 
  search() {
    this.searchService.search(this.model).subscribe(
      next => {
        this.gotResult.emit(next);
    });
  }

}

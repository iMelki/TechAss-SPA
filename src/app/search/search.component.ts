import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: any;
  searchItem: string;

  constructor() { }

  ngOnInit() {
  }

  showResult(result: any) {
    this.searchItem = result.name;
    this.result = result.url;
  }
}

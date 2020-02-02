import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() resultFromSearchComp: string;
  @Input() searchItemFromSearchComp: string;
  items: any;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.searchService.getHistory().subscribe(response => {
      this.items = response;
    }, error => {
      console.log(error);
    });
  }

}

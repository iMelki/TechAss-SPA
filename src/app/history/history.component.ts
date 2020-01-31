import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  items: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.http.get('http://localhost:5000/api/figures').subscribe(response => {
      this.items = response;
    }, error => {
      console.log(error);
    });
  }

  goToLink(url: string){
    window.open(url, '_blank');
  }

}

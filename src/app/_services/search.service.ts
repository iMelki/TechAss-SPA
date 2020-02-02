import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = 'http://localhost:5000/api/figures/';

  constructor(private http: HttpClient) { }

  search(input: any) {
    return this.http.post(this.baseUrl + 'register', input);
  }

  getHistory() {
    return this.http.get(this.baseUrl);
  }
}

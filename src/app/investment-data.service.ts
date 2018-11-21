import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InvestmentDataService {

  constructor(private http: Http) { }

  getByDate(date: string) {
   return this.http.get(`https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/?${date}?soi.json`);
  }
}

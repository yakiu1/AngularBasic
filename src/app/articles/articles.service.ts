import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesDataInterface } from './articlesDataInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  getWords() {
    // now returns an Observable of Config
    return this.http.get<ArticlesDataInterface>('./api/apiData.json');
  }
}

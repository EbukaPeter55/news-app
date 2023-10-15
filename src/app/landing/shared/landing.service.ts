import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  api_key: string = 'ed43b721bac44e0db5ec220a62cd8894'
  BASE_URL: string = 'https://newsapi.org/v2'

  constructor(
    private http: HttpClient
  ) { }

  getArticles():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=${this.api_key}`);
  }
}

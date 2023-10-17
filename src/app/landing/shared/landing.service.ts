import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Article, ArticleResponse} from "./landing.model";

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  api_key: string = 'ed43b721bac44e0db5ec220a62cd8894'
  BASE_URL: string = 'https://newsapi.org/v2'

  constructor(
    private http: HttpClient
  ) {
    const cachedArticle = localStorage.getItem('article');
    if (cachedArticle) {
      this.cachedArticleSubject.next(JSON.parse(cachedArticle));
    }
  }

  private cachedArticleSubject = new BehaviorSubject<Article[]>([]);
  article = this.cachedArticleSubject.asObservable();

  /**
   * Persist bookmarked articles using browser storage (i.e. local storage)
   * @param article Bookmarked articles
   */
  cacheArticle(article: Article[]) {
    localStorage.setItem('article', JSON.stringify(article));
    this.cachedArticleSubject.next(article);
  }

  /**
   * Http request to get articles via the API endpoint
   */
  getArticles(): Observable<ArticleResponse> {
    return this.http.get<ArticleResponse>(`${this.BASE_URL}/everything?q=tesla&sortBy=publishedAt&apiKey=${this.api_key}`);
  }
}

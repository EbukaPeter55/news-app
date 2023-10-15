import {Component, Input, OnInit} from '@angular/core';
import {LandingService} from "../../landing/shared/landing.service";

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})

export class NewsSectionComponent implements OnInit{
defaultImage:string = './assets/images/card-image.svg';
@Input() teslaArticles: any;
bookmarkedArticles: any[] = [];

constructor(
    private landingService: LandingService
) {
}

ngOnInit() {
  console.log('tesla articles', this.teslaArticles);
}

bookmarkArticle(article:any){
  if(!this.bookmarkedArticles.includes((article))){
    this.bookmarkedArticles.push(article);
  }
  console.log('list of bookmarked article', this.bookmarkedArticles);
  article = this.bookmarkedArticles
  this.landingService.cacheArticle(article);
  console.log('article', article);
}
}

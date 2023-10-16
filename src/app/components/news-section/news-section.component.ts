import {Component, Input, OnInit} from '@angular/core';
import {LandingService} from "../../landing/shared/landing.service";
import {Article} from "../../landing/shared/landing.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})

export class NewsSectionComponent implements OnInit{
defaultImage:string = './assets/images/card-image.svg';
@Input() teslaArticles: Article[] = [];
@Input() loadingState: boolean = false;
page: number = 1;
bookmarkedArticles: Article[] = [];

constructor(
    private landingService: LandingService,
    private toastr: ToastrService
) {
}

ngOnInit() {
}

bookmarkArticle(article:any){
  if(!this.bookmarkedArticles.includes((article))){
    this.bookmarkedArticles.push(article);
  }
  this.teslaArticles.forEach(articleDisplayed=>{
  })
  this.toastr.success(`Article by ${article.author} successfully bookmarked!`);
  article = this.bookmarkedArticles
  this.landingService.cacheArticle(article);
}
}

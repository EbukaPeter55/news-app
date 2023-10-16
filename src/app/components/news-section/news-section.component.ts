import {Component, Input} from '@angular/core';
import {LandingService} from "../../landing/shared/landing.service";
import {Article} from "../../landing/shared/landing.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})

export class NewsSectionComponent {
  defaultImage: string = './assets/images/card-image.svg';
  /**
   * Get articles from the parent component using @Input decorator
   */
  @Input() teslaArticles: Article[] = [];
  /**
   * Get loading state from parent component using @Input decorator
   */
  @Input() loadingState: boolean = false;
  page: number = 1;
  bookmarkedArticles: Article[] = [];

  constructor(
    private landingService: LandingService,
    private toastService: ToastrService
  ) {
  }

  /**
   * Bookmark articles when clicked, and store the data in the service using behaviour subject
   * @param article The article clicked for bookmarking
   */
  bookmarkArticle(article: any) {
    if (!this.bookmarkedArticles.includes((article))) {
      this.bookmarkedArticles.push(article);
    }
    this.toastService.success(`Article by ${article.author} successfully bookmarked!`);
    article = this.bookmarkedArticles
    this.landingService.cacheArticle(article);
  }
}

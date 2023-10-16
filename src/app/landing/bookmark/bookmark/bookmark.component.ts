import {Component, OnInit} from '@angular/core';
import {LandingService} from "../../shared/landing.service";
import {Subject, takeUntil} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Article} from "../../shared/landing.model";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})

export class BookmarkComponent implements OnInit {
  destroy$ = new Subject<void>();
  isLoading: boolean = false;
  bookmarkedArticle: Article[] = [];
  defaultImage: string = './assets/images/card-image.svg';
  displayModal: boolean = false;
  articleToRemove: Article = {
    author: '',
    content: '',
    description: '',
    publishedAt: '',
    source: {id: '', name: ''},
    title: '',
    url: '',
    urlToImage: ''
  };

  constructor(
    private landingService: LandingService,
    private toastService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.getBookmarkedArticles();
  }

  /**
   * Get bookmarked articles
   */
  getBookmarkedArticles() {
    this.landingService.article
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if(response){
          this.bookmarkedArticle = response;
        }
      });
  }

  closeModal() {
    this.displayModal = false;
  }

  openWarningModal(articleToDelete: Article) {
    this.articleToRemove = articleToDelete;
    this.displayModal = true;
  }

  /**
   * Remove article and update the local storage with the latest available bookmarked articles
   */
  removeArticle() {
    this.isLoading = true;
    let filterArticle = this.bookmarkedArticle.filter((article: Article) => article.title !== this.articleToRemove.title);
    localStorage.setItem('article', JSON.stringify(filterArticle));
    this.getBookmarkedArticles();
    this.bookmarkedArticle = filterArticle;
    this.isLoading = false;
    this.closeModal();
    this.toastService.success('Article removed successfully!');
  }
}

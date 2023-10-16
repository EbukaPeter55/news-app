import {Component, OnInit} from '@angular/core';
import {LandingService} from "../../shared/landing.service";
import {pipe, Subject, takeUntil} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Article} from "../../shared/landing.model";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit{
  destroy$ = new Subject<void>();
  isLoading: boolean = false;
  bookmarkedArticle: Article[] = [];
  defaultImage:string = './assets/images/card-image.svg';
  displayModal: boolean = false;
  articleToRemove: any = null;


  constructor(
      private landingService: LandingService,
      private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.getBookmarkedArticles();
  }

  getBookmarkedArticles(){
    let retrievedArticle = localStorage.getItem('article');
    let retrievedBookmarkedArticle = JSON.parse(`${retrievedArticle}`)
    if (retrievedBookmarkedArticle) {
      this.isLoading = false;
      this.bookmarkedArticle = retrievedBookmarkedArticle;
    } else {
      this.isLoading = false;
    }
  }

  closeModal(){
    this.displayModal = false;
  }

  openWarningModal(articleToDelete:any){
    this.articleToRemove = articleToDelete;
    this.displayModal = true;
  }

  removeArticle(){
    this.isLoading = true;
    let filterArticle = this.bookmarkedArticle.filter((article:any) => article.title !== this.articleToRemove.title);
     localStorage.setItem('article', JSON.stringify(filterArticle));
    this.getBookmarkedArticles();
    this.isLoading = false;
    this.closeModal();
    this.toastr.success('Article removed successfully!');
  }

}

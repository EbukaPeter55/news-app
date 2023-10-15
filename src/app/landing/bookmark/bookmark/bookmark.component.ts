import {Component, OnInit} from '@angular/core';
import {LandingService} from "../../shared/landing.service";
import {pipe, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit{
  destroy$ = new Subject<void>();
  isLoading: boolean = false;
  bookmarkedArticle: any;
  defaultImage:string = './assets/images/card-image.svg';
  displayModal: boolean = false


  constructor(
      private landingService: LandingService
  ) {
  }

  ngOnInit() {
    this.getBookmarkedArticles();
  }

  getBookmarkedArticles(){
    let retrievedArticle = localStorage.getItem('article');
    let retrievedBookmarkedArticle = JSON.parse(`${retrievedArticle}`)
    console.log('retrieved article', retrievedBookmarkedArticle);
    if (retrievedBookmarkedArticle) {
      this.isLoading = false;
      this.bookmarkedArticle = retrievedBookmarkedArticle;
      console.log('articles', this.bookmarkedArticle)
    } else {
      this.isLoading = false;
    }
  }

  closeModal(){
    this.displayModal = false;
  }

  openWarningModal(articleToRemove:any){
    localStorage.setItem('articleToDelete', JSON.stringify(articleToRemove))
    this.displayModal = true;
  }

  removeArticle(){
    this.isLoading = true;
    let retrievedArticle = localStorage.getItem('articleToDelete');
     let articleToDelete = JSON.parse(`${retrievedArticle}`)
    console.log('retrieved article', articleToDelete);
    let filterArticle = this.bookmarkedArticle.filter((article:any) => article.title !== articleToDelete.title);
    console.log('new bookmarked article', filterArticle);
     localStorage.setItem('article', JSON.stringify(filterArticle));
    this.getBookmarkedArticles();
    this.isLoading = false;
    this.closeModal()
  }

}

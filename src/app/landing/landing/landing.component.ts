import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingService} from "../shared/landing.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy{
  isLoading: boolean = false;
  destroy$ = new Subject<void>();
  articles: any = [];

  constructor(
    private landingService: LandingService
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(){
    this.isLoading = true;
    this.landingService.getArticles().pipe(takeUntil(this.destroy$)).subscribe(response => {
      if (response) {
        this.isLoading = false;
        this.articles = response?.articles;
        console.log('articles', this.articles)
      } else {
        this.isLoading = false;
      }
    })
  }


  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

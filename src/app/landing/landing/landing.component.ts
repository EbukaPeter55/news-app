import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingService} from "../shared/landing.service";
import {Subject, takeUntil} from "rxjs";
import {Article} from "../shared/landing.model";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  destroy$ = new Subject<void>();
  articles: Article[] = [];

  constructor(
    private landingService: LandingService
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  /**
   * Get all articles by subscribing to observables returning data from the service
   */
  getArticles() {
    this.isLoading = true;
    this.landingService.getArticles().pipe(takeUntil(this.destroy$)).subscribe(response => {
      if (response) {
        this.isLoading = false;
        this.articles = response?.articles
      } else {
        this.isLoading = false;
      }
    })
  }

  /**
   * Unsubscribe to handle memory leak
   */
  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

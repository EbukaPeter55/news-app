import {Component, OnDestroy, OnInit} from '@angular/core';
import {LandingService} from "../shared/landing.service";
import {catchError, of, Subject, takeUntil} from "rxjs";
import {Article} from "../shared/landing.model";
import {ToastrService} from "ngx-toastr";

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
    private landingService: LandingService,
    private toastService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  /**
   * Get all articles by subscribing to observables returning data from the service.
   * Handle errors using the catchError and of rxjs operators
   */
  getArticles() {
    this.isLoading = true;
    this.landingService.getArticles().pipe(takeUntil(this.destroy$),
      catchError(error=>{
        this.isLoading = false;
        this.toastService.error(error?.error?.message);
        return of(null);
      })).subscribe(response => {
      if (response) {
        this.isLoading = false;
        this.articles = response?.articles
      } else {
        this.isLoading = false;
        this.toastService.error('An error occurred. Failed to retrieve articles');
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

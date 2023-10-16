import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./landing/landing/landing.component";

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./landing/bookmark/bookmark.module').then(m => m.BookmarkModule) //Lazy load Bookmark module for performance optimization
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

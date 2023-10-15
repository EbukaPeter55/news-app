import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingComponent} from "./landing/landing/landing.component";
import {NavigationBarComponent} from "./components/navigation-bar/navigation-bar.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {NewsSectionComponent} from "./components/news-section/news-section.component";
import {HttpClientModule} from "@angular/common/http";
import {BookmarkModule} from "./landing/bookmark/bookmark.module";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationBarComponent,
    HeroSectionComponent,
    NewsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookmarkModule
  ],
  providers: [],
  exports: [
    NavigationBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

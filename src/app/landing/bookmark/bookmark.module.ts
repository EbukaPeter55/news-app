import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import {BookmarkRoutingModule} from "./bookmark-routing.module";


@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
  ]
})
export class BookmarkModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarkComponent} from "./bookmark/bookmark.component";

const routes: Routes = [
    {
        path: '', component: BookmarkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookmarkRoutingModule { }

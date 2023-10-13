import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [

];

@NgModule({
  declarations: [ LandingComponent ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class LandingRoutingModule {}

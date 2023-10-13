import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {NavigationBarComponent} from "../components/navigation-bar/navigation-bar.component";



@NgModule({
  declarations: [
    LandingComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import {NavigationBarComponent} from "../components/navigation-bar/navigation-bar.component";
import {HeroSectionComponent} from "../components/hero-section/hero-section.component";



@NgModule({
  declarations: [
    LandingComponent,
    NavigationBarComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LandingModule { }

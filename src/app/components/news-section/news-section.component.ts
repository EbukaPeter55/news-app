import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})

export class NewsSectionComponent implements OnInit{
defaultImage:string = './assets/images/card-image.svg';
@Input() teslaArticles: any;

ngOnInit() {
  console.log('tesla articles', this.teslaArticles);
}
}

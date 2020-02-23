import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArticlesDataInterface } from './articlesDataInterface';
import { ArticlesService } from './articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  articlesData: ArticlesDataInterface[];
  @Output()
  thumb = new EventEmitter();

  constructor(private articalService: ArticlesService) { }

  ngOnInit(): void {

  }

  public OnClickThumb(evt: MouseEvent, item: any): void {
    try {
      if (!item.alreadyLike) {
        item.favoritesCount = item.favoritesCount + 1;
        item.alreadyLike = true;
        this.thumb.emit({ user: 'Gon', articles: item.slug });
      }
      console.log(item);
    } catch  {

    }
  }
}

import { Component } from '@angular/core';
import { ArticlesService } from './articles/articles.service';
import { ArticlesDataInterface } from './articles/articlesDataInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share Gon';
  linkurl = 'https://pvt5r486.github.io/f2e/20190527/123375935/';
  linkHtml = '<u>knowledge.</u>';
  articlesData: ArticlesDataInterface;

  constructor(private articalService: ArticlesService) {
    this.articalService.getWords().subscribe(data => { this.articlesData = data; });
  }

  doArticalThumb(evt: { user, articles }): void {
    this.title = '你讚了' + evt.articles;
    console.log(evt);
  }

  SearchWithKeyword(evt: { data }): void {
    this.title = '你找了' + evt.data;
  }

}

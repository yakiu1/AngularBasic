import { Component, OnInit, Input } from '@angular/core';
import { ArticlesDataInterface } from './articlesDataInterface';
import { ArticlesService } from './articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  articlesData: ArticlesDataInterface;

  constructor(private articalService: ArticlesService) { }

  ngOnInit(): void {

  }


}

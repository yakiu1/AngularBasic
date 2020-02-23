import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fontSize: number;
  searchText: string;
  value: string;
  isHightlight: boolean;

  constructor() {
    this.fontSize = 12;
    this.value = '';
    this.searchText = '';
    this.isHightlight = false;
  }

  ngOnInit(): void {
  }

  onSearchClick(): void {
    try {
      this.searchText = this.searchText + '1';
      console.log(this.searchText);
      this.fontSize = this.fontSize + 1;

      if (this.fontSize % 2 === 0) {
        this.isHightlight = true;
      } else {

        this.isHightlight = false;
      }
    } catch {

    }
  }
}

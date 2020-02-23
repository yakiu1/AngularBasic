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

  constructor() {
    this.fontSize = 12;
    this.value = '';
    this.searchText = '';
  }

  ngOnInit(): void {
  }

  onSearchClick(): void {
    try {
      this.searchText = this.searchText + '1';
      console.log(this.searchText);
      this.fontSize = this.fontSize + 1;
    } catch {

    }
  }
}

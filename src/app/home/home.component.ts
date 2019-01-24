import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/data/img-mini/001.jpg' },
      { name: 'assets/data/img-mini/002.jpg' },
      { name: 'assets/data/img-mini/003.jpg' },
      { name: 'assets/data/img-mini/001.jpg' },
      { name: 'assets/data/img-mini/002.jpg' },
      { name: 'assets/data/img-mini/003.jpg' },
      { name: 'assets/data/img-mini/001.jpg' },
      { name: 'assets/data/img-mini/002.jpg' },
      { name: 'assets/data/img-mini/003.jpg' },
      // { name: 'assets/data/img/004.jpg' },
      // { name: 'assets/data/img/005.jpg' },
      // { name: 'assets/data/img/006.jpg' },
      // { name: 'assets/data/img/001.jpg' },
      // { name: 'assets/data/img/002.jpg' },
      // { name: 'assets/data/img/003.jpg' },
      // { name: 'assets/data/img/004.jpg' },
      // { name: 'assets/data/img/005.jpg' },
      // { name: 'assets/data/img/006.jpg' },
    ];
  }
}

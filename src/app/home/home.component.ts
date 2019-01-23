// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }


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
      { name: 'assets/data/img/001.jpg' },
      { name: 'assets/data/img/002.jpg' },
      { name: 'assets/data/img/003.jpg' },
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




// import { Component, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
// import { NguCarouselConfig } from '@ngu/carousel';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class HomeComponent implements AfterViewInit {
//   imgags = [
//     'data/001.jpg',
//     'data/002.png',
//     'data/003.png',
//     'data/004.png',
//     'data/005.png'
//   ];
//   public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
//   public carouselTiles = {
//     0: [],
//     1: [],
//     2: [],
//     3: [],
//     4: [],
//     5: []
//   };
//   public carouselTile: NguCarouselConfig = {
//     grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
//     slide: 3,
//     speed: 250,
//     point: {
//       visible: true
//     },
//     load: 2,
//     velocity: 0,
//     touch: true,
//     easing: 'cubic-bezier(0, 0, 0.2, 1)'
//   };
//   constructor(private _cdr: ChangeDetectorRef) { }
//
//   ngAfterViewInit() {
//     this._cdr.detectChanges();
//   }
//
//   ngOnInit() {
//     this.carouselTileItems.forEach(el => {
//       this.carouselTileLoad(el);
//     });
//   }
//
//   public carouselTileLoad(j) {
//     const len = this.carouselTiles[j].length;
//     if (len <= 30) {
//       for (let i = len; i < len + 15; i++) {
//         this.carouselTiles[j].push(
//           this.imgags[Math.floor(Math.random() * this.imgags.length)]
//         );
//       }
//     }
//   }
// }

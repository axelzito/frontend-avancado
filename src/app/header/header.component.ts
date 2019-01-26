import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  items = [
    {
      id: 1,
      text: 'First item'
    },
    {
      id: 2,
      text: 'Second item'
    },
    {
      id: 3,
      text: 'Third item'
    }
  ];

  ngOnInit() {
  }

  navigateCategory(category){
    this._router.navigate(['/productList', category]);
  }
  
}

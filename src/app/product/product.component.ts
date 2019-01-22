import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { IStorage } from '../storage';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: IStorage[];
  public title;
  public author;
  public publisher;
  public theme;
  public year;
  public language;
  public imgPath;
  public originalPrice;
  public price;

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    this._storageService.getStorage().subscribe(data => {
      this.product = data;
      this.title = this.product[1].title;
      this.author = this.product[1].author;
      this.publisher = this.product[1].publisher;
      this.theme = this.product[1].theme;
      this.year = this.product[1].year;
      this.language = this.product[1].language;
      this.imgPath = this.product[1].imgPath;
      this.originalPrice = this.product[1].originalPrice;
      this.price = this.product[1].price;
    });
    /*this._product = this._storageService.getProductById(5);
    this.title = this._product.title;
    this.author = this._product.author;
    this.publisher = this._product.publisher;
    this.theme = this._product.theme;
    this.year = this._product.year;
    this.language = this._product.language;
    this.imgPath = this._product.imgPath;
    this.originalPrice = this._product.originalPrice;
    this.price = this._product.price;*/
  }

  
}

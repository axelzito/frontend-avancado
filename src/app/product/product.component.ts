import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { IStorage } from '../storage';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private _product: IStorage;
  public title: string;
  public author: string;
  public publisher: string;
  public category: string;
  public year: number;
  public language: string;
  public imgPath: string;
  public originalPrice: number;
  public price: number;
  public id: number;

  constructor(private _storageService: StorageService, private _route: ActivatedRoute, private _cartService: CartService, private _router: Router) { }

  ngOnInit() {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].id == this.id){
          this._product = data[i];
        }
      }
      this.title = this._product.title;
      this.author = this._product.author;
      this.publisher = this._product.publisher;
      this.category = this._product.category;
      this.year = this._product.year;
      this.language = this._product.language;
      this.imgPath = this._product.imgPath;
      this.originalPrice = this._product.originalPrice;
      this.price = this._product.price;
    });
  }

  addCart(){
    this._cartService.addProduct(this.id);
    this._router.navigate(['/cart']);
  }
 
}
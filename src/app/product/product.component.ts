import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { IStorage } from '../storage';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private _product: IStorage;
  public title;
  public author;
  public publisher;
  public theme;
  public year;
  public language;
  public imgPath;
  public originalPrice;
  public price;
  public id;

  constructor(private _storageService: StorageService, private _route: ActivatedRoute) { }

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
      this.theme = this._product.theme;
      this.year = this._product.year;
      this.language = this._product.language;
      this.imgPath = this._product.imgPath;
      this.originalPrice = this._product.originalPrice;
      this.price = this._product.price;
    });
  }
 
}
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public items = [];
  public itemsInfantil = [];
  public itemsMaisVendidos = [];

  constructor(private _storageService: StorageService, private _router: Router) { }

  ngOnInit() {
    this.items = this.listAllProducts();
    this.itemsInfantil = this.listByCategory('Infantil');
    this.itemsMaisVendidos = this.listBestSellers();
  }

  listByCategory(category:string):any[]{
    let product = [];
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].category === category){
          product.push({
            title: data[i].title,
            imgPath: data[i].imgPath,
            id: data[i].id,
            originalPrice: data[i].originalPrice,
            price: data[i].price
          });
        }
      }
    });
    return product;
  }

  listBestSellers():any[]{
    let product = [];
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].bestSeller === 'true'){
          product.push({
            title: data[i].title,
            imgPath: data[i].imgPath,
            id: data[i].id,
            originalPrice: data[i].originalPrice,
            price: data[i].price
          });
        }
      }
    });
    return product;
  }

  listAllProducts():any[]{
    let product = [];
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        product.push({
          title: data[i].title,
          imgPath: data[i].imgPath,
          id: data[i].id,
          originalPrice: data[i].originalPrice,
          price: data[i].price
        });
      }
    });
    return product;
  }

  navigateToProduct(id){
    this._router.navigate(['/product', id]);
  }
  
}
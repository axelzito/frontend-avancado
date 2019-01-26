import { Injectable } from '@angular/core';
import { IStorage } from './storage';
import { StorageService } from './storage.service';

export interface Product {
  iStorage: IStorage;
  quant: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  books: IStorage[];
  public productList = [];

  constructor(private _storageService: StorageService) {
    this._storageService.getStorage().subscribe(data => {
      this.books = data;
      this.books.forEach(book => {
        this.productList.push({ iStorage: book, quant: 0 });
      });
    });
  }

  addProduct(id: number) {
    this.productList.forEach(p => {
      if (p.iStorage.id == id) {
        p.quant++;
      }
    });
  }

  removeProduct(id: number) {
    this.productList.forEach(p => {
      if (p.iStorage.id == id && p.quant > 0) {
        p.quant--;
      }
    });
  }

  getProductList(): Product[] {
    return this.productList;
  }


}

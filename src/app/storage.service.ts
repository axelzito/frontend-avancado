import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStorage } from './storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _url: string = "/assets/data/books.json";
  private _product:IStorage = null;

  constructor(private http: HttpClient) { }

  getStorage():Observable<IStorage[]>{
    return this.http.get<IStorage[]>(this._url);
  }

  getProductById(id:number):IStorage{
    this.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].id == id){
          this._product.title = data[i].title;
          return;
        }
      }
    });
    console.log(this._product.title);
    return this._product;
  }
}

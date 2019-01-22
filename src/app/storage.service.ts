import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStorage } from './storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _url: string = "/assets/data/books.json";
  
  constructor(private http: HttpClient) { }

  getStorage():Observable<IStorage[]>{
    return this.http.get<IStorage[]>(this._url);
  }

}

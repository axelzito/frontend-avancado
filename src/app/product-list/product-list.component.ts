import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public category;
  public tiles = [];

  constructor(private _storageService: StorageService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      this.adjustCategory();
      this.tiles = [];
      if(this.category == 'todascategorias'){
        this.listAllProducts();
      }
      else if(this.category == 'maisvendidos'){
        this.listBestSellers();
      }
      else{
        this.listByCategory();
      }
    });
  }

  adjustCategory(){
    switch(this.category){
      case 'romance':
        this.category = 'Romance';
        break;
      case 'fantasia':
        this.category = 'Fantasia';
        break;
      case 'administracao':
        this.category = 'Administração';
        break;
      case 'infantil':
        this.category = 'Infantil';
        break;
      case 'autoajuda':
        this.category = "Autoajuda"
        break;
      case 'didaticos':
        this.category = "Didáticos"
        break;
      case 'espiritualidade':
        this.category = "Espiritualidade"
        break;
    }
  }

  listByCategory(){
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].category === this.category){
          this.tiles.push({
            title: data[i].title,
            imgPath: data[i].imgPath,
            id: data[i].id,
            originalPrice: data[i].originalPrice,
            price: data[i].price
          });
        }
      }
    });
  }

  listAllProducts(){
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        this.tiles.push({
          title: data[i].title,
          imgPath: data[i].imgPath,
          id: data[i].id,
          originalPrice: data[i].originalPrice,
          price: data[i].price
        });
      }
    });
  }

  listBestSellers(){
    this._storageService.getStorage().subscribe(data => {
      for(var i = 0; i < data.length; i++) {
        if(data[i].bestSeller === 'true'){
          this.tiles.push({
            title: data[i].title,
            imgPath: data[i].imgPath,
            id: data[i].id,
            originalPrice: data[i].originalPrice,
            price: data[i].price
          });
        }
      }
    });
  }

  navigateToProduct(id){
    this._router.navigate(['/product', id]);
  }
  
}

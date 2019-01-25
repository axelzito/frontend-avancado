import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

export interface Transaction {
  id : number;
  item: string;
  preco: number;
  quant: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  displayedColumns: string[] = ['item', 'preco', 'quant', 'sub'];
  transactions: Transaction[];
  constructor(private _cartService: CartService) { }
  
  ngOnInit() {
  }
  
  getPrecoTotal() {
    return this.transactions.map(t => t.preco*t.quant).reduce((acc, value) => acc + value, 0);
  }

  add(id:number){
    this._cartService.addProduct(id);
    this.setTransaction();
  }

  remove(id:number){
    this._cartService.removeProduct(id);
    this.setTransaction();
  }

  addLivro(){
    this._cartService.addProduct(10);
    this.setTransaction();
  }

  setTransaction(){
    this.transactions = [];
    let list = this._cartService.getProductList();
    list.forEach(element => {
      if (element.quant > 0) {
        let p: string = String(element.iStorage.price);
        this.transactions.push({id: element.iStorage.id, item: element.iStorage.title, preco: parseFloat(p), quant: element.quant})  
      }
    });
  }
  
}

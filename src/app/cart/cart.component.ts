import { Component, OnInit } from '@angular/core';

export interface Transaction {
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
  transactions: Transaction[] = [
    {item: 'livro 1', preco: 4, quant: 1},
    {item: 'livro 2', preco: 5, quant: 2},
    {item: 'livro 3', preco: 2, quant: 1},
    {item: 'livro 4', preco: 4, quant: 3},
    {item: 'livro 5', preco: 25, quant: 1},
    {item: 'livro 6', preco: 15, quant: 4},
  ];
  constructor() { }
  
  ngOnInit() {
  }
  
  getPrecoTotal() {
    return this.transactions.map(t => t.preco*t.quant).reduce((acc, value) => acc + value, 0);
  }
  
}

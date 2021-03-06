import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

export interface Transaction {
  id: number;
  imgPath: string;
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
  mensagem: string;
  flag_vazio: boolean;
  flag_cheio: boolean;
  constructor(public dialog: MatDialog, private _cartService: CartService) {
    this.mensagem = 'Nenhum item no carrinho!';
    this.flag_vazio = true;
    this.flag_cheio = false;
    this.setTransaction();
  }

  ngOnInit() {
  }

  getPrecoTotal() {
    return this.transactions.map(t => t.preco * t.quant).reduce((acc, value) => acc + value, 0);
  }

  add(id: number) {
    this._cartService.addProduct(id);
    this.setTransaction();
  }

  remove(id: number) {
    this._cartService.removeProduct(id);
    this.setTransaction();
  }

  setTransaction() {
    this.transactions = [];
    const list = this._cartService.getProductList();
    list.forEach(element => {
      if (element.quant > 0) {
        const p: string = String(element.iStorage.price);
        this.transactions.push({id: element.iStorage.id, imgPath: element.iStorage.imgPath, item: element.iStorage.title,
          preco: parseFloat(p), quant: element.quant});
      }
    });
  }

  efetuaCompra() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mensagem = 'Compra efetuada com sucesso!';
        this.flag_cheio =  true;
        this.flag_vazio = false;
        this._cartService.clearList();
        this.setTransaction();
      }
    });
  }
}

import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
        //inject service shipping
        private http: HttpClient
  ) { }

  //define methods add, get, clear
  addToCart(item: Product){
    this.items.push(item);
  }

  getItem(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items; 
  }

  //define method getShippingPrices
  getShippingPrices(){
    return this.http.get<{type: string, price: number} []>
    ('/assets/shipping.json');
  }
}

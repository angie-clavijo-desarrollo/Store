import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  item: Product | undefined;

  constructor (
    private route: ActivatedRoute,
    
    //injeect the SERVICE cart
    private cartService: CartService
    ){ }

  ngOnInit() {

    //First get the product id from the current route - observable route -- route.snapshot es para acceder a los parametros de la ruta activada
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'))

    // match o find product that correspond with id provide in route
    this.item = products.find(product => product.id === productIdFromRoute);
  }

  //method for add to cart
  addToCart(item: Product){
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
  }

}

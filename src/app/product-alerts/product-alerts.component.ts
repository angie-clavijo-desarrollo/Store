import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  //Decorator input -> indicate that property value passes in from COMPONENTS PARENT - Pass data to a child component
  @Input() product! : Product;

  ///Decorator output and EventEmitter -> Pass data to a parent component
  @Output() notify = new EventEmitter();
}

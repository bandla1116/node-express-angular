import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() productList: Product[]
  @Output() onProductSelected: EventEmitter<Product>
  private currentProduct: Product

  constructor() {
    this.onProductSelected = new EventEmitter()
  }

  clicked(product: Product): void {
    this.currentProduct = product
    this.onProductSelected.emit(product)
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku
  }

  ngOnInit() {
    
  }
}

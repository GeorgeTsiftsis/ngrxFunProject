import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() displayCode: boolean;
  @Input() selectedProduct: Product;
  @Output() displayCodeChanged = new EventEmitter<boolean>();
  @Output() initiliazeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newProduct(): void {
    this.initiliazeNewProduct.emit();
  }
  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }

}

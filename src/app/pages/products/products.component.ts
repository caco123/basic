import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/models/produc.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products:Product[]
  constructor(private productService: ProductService) {
    this.products=[]
   }

   async ngOnInit() {

    try {
      this.products = await firstValueFrom(this.productService.all2());

    } catch (error) {
      console.warn(error)
    }

  }
}

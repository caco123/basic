import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Cart } from 'src/app/models/cart.model ';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts!: Cart[]
  constructor(private cartService: CartService) {  }

  async ngOnInit() {
    //this.cart = await this.cartService.getAll();

    try {
      this.carts = await firstValueFrom(this.cartService.all2());

    } catch (error) {
      console.warn(error)
    }

  }

}

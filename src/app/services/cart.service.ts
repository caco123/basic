import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Product } from '../models/produc.model';
import { Cart } from '../models/cart.model ';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url: string = environment.dummyjson;

  constructor(private http: HttpClient) { }

 
   
  all2(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.url}/carts`).pipe(
      map((res: any) => res.carts.map((a: any) => new Cart(a)))
    )
  }

}

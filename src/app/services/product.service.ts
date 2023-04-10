import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Product } from '../models/produc.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.fakestoreapi;

  constructor(private http: HttpClient) { }

 
   
  all2(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`).pipe(
      map((res: any) => res.map((a: any) => new Product(a)))
    )
  }

}

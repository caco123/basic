import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Product } from '../models/produc.model';
import { Cart } from '../models/cart.model ';
import { posts } from '../models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class postsService {

  url: string = environment.dummyjson;

  constructor(private http: HttpClient) { }

 
   
  all2(): Observable<posts[]> {
    return this.http.get<posts[]>(`${this.url}/posts`).pipe(
      map((res: any) => res.posts.map((a: any) => new posts(a)))
    )
  }

}

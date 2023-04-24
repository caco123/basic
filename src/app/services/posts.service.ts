import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Product } from '../models/produc.model';
import { Cart } from '../models/cart.model ';
import { Post } from '../models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url: string = environment.dummyjson;

  constructor(private http: HttpClient) { }

 
   
  all2(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`).pipe(
      map((res: any) => res.posts.map((a: any) => new Post(a)))
    )
  }

}

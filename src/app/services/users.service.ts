import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url: string = environment.fakestoreapi;

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      map((res: any) => res.map((user: any) => new User(user)))
    )
  }

  getSingle(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`).pipe(
      tap((res: any) => new User(res))
    )
  }

  save(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/users/${user.id}`, user).pipe(
      tap((res: any) => new User(res))
    )
  }
}

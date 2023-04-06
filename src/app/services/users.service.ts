import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environment.fakestoreapi;

  constructor(private http: HttpClient) { }

  getAll(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.http.get<User[]>(`${this.url}/userss`).subscribe({
        next: (res: any) => {
          const data: User[] = res.map((res: any) => {
            return new User(res);
          });
          resolve(data);
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
  }

  all2(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      map((res: any) => res.map((a: any) => new User(a)))
    )
  }

}

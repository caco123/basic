import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/models/produc.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts:Post[]
  constructor(private PostsService: PostsService) {
    this.posts=[]
   }

   async ngOnInit() {

    try {
      this.posts = await firstValueFrom(this.PostsService.all2());

    } catch (error) {
      console.warn(error)
    }

  }
}

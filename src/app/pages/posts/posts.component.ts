import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/models/produc.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts:Posts[]
  constructor(private postsService: PostsService) {
    this.posts=[]
   }

   async ngOnInit() {

    try {
      this.posts = await firstValueFrom(this.postsService.all2());

    } catch (error) {
      console.warn(error)
    }

  }
}

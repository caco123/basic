import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { posts } from 'src/app/models/posts.model';
import { postsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts:posts[]
  constructor(private postsService: postsService) {
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

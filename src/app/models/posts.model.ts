import { PostsInterface } from "../interfaces/posts.interface";

export class posts implements PostsInterface {
    id: number;
    title: string;
    body: string;
    userId: string;
    tags: string;

    constructor(posts: PostsInterface) {
        this.id = posts.id;
        this.title = posts.title;
        this.body = posts.body;
        this.userId = posts.userId;
        this.tags = posts.tags;
    }
}
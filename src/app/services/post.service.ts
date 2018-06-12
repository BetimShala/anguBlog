import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class PostService {
    constructor(private http: HttpClient){}

    //methods 

    getAllPosts()
    {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
    getUserPosts(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
      }
}
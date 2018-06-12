import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  user: String;
  constructor(private route: ActivatedRoute, private data: PostService) {
    this.route.params.subscribe(params => this.user = params.userId);
  }

  ngOnInit() {
    if(this.user==null){
      this.data.getAllPosts().subscribe(data => this.posts$ = data);
      console.log("veq poste");
    }
    else{
      console.log("user poste");
      this.data.getUserPosts(this.user).subscribe(data=>this.posts$ = data);
    }
    }
  }

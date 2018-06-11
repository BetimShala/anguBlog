import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  user$: Object;
  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.user$ = params.userId);
  }

  ngOnInit() {
    this.data.getUserPosts(this.user$).subscribe(
      data => this.posts$ = data);
  }

}

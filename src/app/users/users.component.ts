import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Object;

  constructor(private data: UserService) {
    
  }

  ngOnInit() {
    this.data.getAllUsers().subscribe(
      data => this.users$ = data);
  }

}

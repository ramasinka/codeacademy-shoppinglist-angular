import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { UsersService } from './shared/user.service';
import { User } from './shared/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

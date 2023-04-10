import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private userService: UsersService) { }

  async ngOnInit() {

    try {
      this.users = await firstValueFrom(this.userService.getAll());

    } catch (error) {
      console.warn(error)
    }

  }

}

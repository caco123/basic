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
  users!: User[]
  constructor(private userService: UsersService) { this.users = [] }

  async ngOnInit() {
    //this.users = await this.userService.getAll();

    try {
      this.users = await firstValueFrom(this.userService.all2());

    } catch (error) {
      console.warn(error)
    }

  }

}

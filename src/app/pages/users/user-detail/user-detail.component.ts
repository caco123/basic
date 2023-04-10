import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user!: User
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  async ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.user = await lastValueFrom(this.userService.getSingle(id));
  }

}

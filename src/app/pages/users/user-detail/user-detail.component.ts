import { FormGroup, FormBuilder } from "@angular/forms";
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
  form!: FormGroup
  user!: User
  constructor(private route: ActivatedRoute, private userService: UsersService, private formBuilder: FormBuilder) { }

  async ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.user = await lastValueFrom(this.userService.getSingle(id));
    this.setFormDefinition();
  }

  private setFormDefinition() {
    this.form = this.formBuilder.group({
      email: [this.user.email],
      username: [this.user.username],
      password: [this.user.password],
      phone: [this.user.phone],
    })
  }

  async enviar() {
    const res = await lastValueFrom(this.userService.save(this.user));
    console.log(res)
  }
}

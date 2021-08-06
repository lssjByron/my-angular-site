import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

// async (a pipe) in ngFor can be used to unwrap observable (subscribe is like promise but called observable)
// (initially had to call this.userService.getUsers().subscribe(users => {this.users = users;})  )
// and will destroy the observable when this component is destroyed
@Component({
  selector: 'app-user-list',
  template: `
    <section class="section">
      <div class="container">

        <div class="columns is-multiline" *ngIf="users">
          <div class="column is-4" *ngFor="let user of users | async">

            <div class="card">
              <div class="card-content">
                <a routerLink="/users/{{ user.login }}">
                  {{ user.login }}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}

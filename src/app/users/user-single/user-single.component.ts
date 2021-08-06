import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

// Angular HTML: 
// [] property bindings (eg. [src]), binds to an attribute.
// If you want to get data from a class into your template

// () event bindings, (eg. (ngSubmit)="submitForm()" in contact component). 
// If you want to listen for events on the template and then pass data from 
// the template into your class

// * structural directive if you want to update your HTML based on 
// your variables and different properties

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url">
          <h2>{{ user.login }}</h2>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // grab the username out of the url
    this.route.params.subscribe(params => {
      const username = params['username'];
    
      // use the userservice to get data from the github api
      this.userService
        .getUser(username)
        .subscribe(user => {
          // bind that to a user variable
          this.user = user
        });
    });


  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- headers -->
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          MY LOGO GOES HERE!
        </a>
      </div>
    </div>
    <!-- routes get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <footer class="footer">
      <div class="container content has-text-centered">
        <p> Made with love by Byron from scratch</p>
      </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}

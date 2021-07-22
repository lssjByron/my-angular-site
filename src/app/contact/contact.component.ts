import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us!</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- contact form -->
        <form (ngSubmit)="submitForm()">
          <!-- name -->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name">
          </div>

          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email">
          </div>

          <!-- message -->
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>

          <!-- submit button -->
          <button type="submit" class="button is-large is-warning">
            Send!
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {}

  submitForm() {
    const message= `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`
    alert(message);
  }

}

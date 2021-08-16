import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../core/services/contentful.service';
import { Entry } from 'contentful'

@Component({
  selector: 'app-recipe-list',
  template: `
    <p>
      recipe-list works!
    </p>
  `,
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {

  recipes: Entry<any> [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

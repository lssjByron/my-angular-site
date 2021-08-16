import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getRecipes(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'recipe'
    }, query))
      .then(res => res.items);
  }

  getRecipe(recipeId: any): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'recipe'
    }, {'sys.id': recipeId}))
      .then(res => res.items[0]);
  }
}

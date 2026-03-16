import { Injectable, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES} from './mock-recipes'

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  addRecipe(recipe: RecipeModel): void {
    this.recipes.update(list => [...list, recipe]);
  }
}

import { Injectable, signal } from '@angular/core';
import { RecipeModel } from './models';
import { MOCK_RECIPES} from './mock-recipes'

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  recipes = signal<RecipeModel[]>(MOCK_RECIPES);
}

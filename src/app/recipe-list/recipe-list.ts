import { Component, signal, computed } from '@angular/core';

import { RecipeModel } from '../models';
import { MOCK_RECIPES} from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [ RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

  protected readonly show = signal(false);
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected logMessage(message: string): void {
    console.log(message);
  }

  protected setRecipe(id: number): void {
    this.recipe.set(MOCK_RECIPES[id]);
    this.show.set(true);
  }
  
}

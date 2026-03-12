import { Component, signal, computed } from '@angular/core';

import { RecipeModel } from '../models';
import { MOCK_RECIPES} from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  //exportAs: 'recipeList',
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

  protected readonly show = signal(false);
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected servings = signal<number>(1);


  protected logMessage(message: string): void {
    console.log(message);
  }

  protected setRecipe(id: number): void {
    this.recipe.set(MOCK_RECIPES[id]);
    this.show.set(true);
    this.servings.set(1);
  }
  
  protected increase(): void {
    this.servings.update((s) => s + 1);
  }

  protected decrease(): void {
    if (this.servings() > 0 && this.servings() !== 1) {
      this.servings.update((s) => s - 1);
    }
  }

  protected adjustingredients = computed(() => {
    const currentRecipe = this.recipe();
    const currentServings = this.servings();
    return currentRecipe.ingredients.map(ing => ({
      ...ing,
      quantity: ing.quantity * currentServings
    }));
  });


}

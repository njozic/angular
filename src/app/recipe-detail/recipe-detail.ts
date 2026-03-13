import { Component, input, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  readonly activeRecipe = input<RecipeModel>();
  protected servings = signal<number>(1);

  protected adjustingredients = computed(() => {
    const currentRecipe = this.activeRecipe();
    const currentServings = this.servings();
    return currentRecipe?.ingredients.map(ing => ({...ing, quantity: ing.quantity * currentServings
    }));
  });

    protected increase(): void {
    this.servings.update((s) => s + 1);
  }

  protected decrease(): void {
    if (this.servings() > 0 && this.servings() !== 1) {
      this.servings.update((s) => s - 1);
    }
  }

}

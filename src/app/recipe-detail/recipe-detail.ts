import { Component, computed, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {

  private readonly recipeService = inject(Recipe);
  private readonly route = inject(ActivatedRoute);

  readonly recipeId = signal(this.route.snapshot.paramMap.get('id')); 
  readonly activeRecipe = computed(() => {
    return this.recipeService.recipes().find(r => r.id === Number(this.recipeId()))
  });


  protected servings = signal<number>(1);

  protected adjustingredients = computed(() => {
    const currentRecipe = this.activeRecipe();
    const currentServings = this.servings();

    if (!currentRecipe) return [];
    
    return currentRecipe.ingredients.map(ing => ({
      ...ing,quantity: ing.quantity * currentServings
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

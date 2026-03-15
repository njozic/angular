import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
import { Recipe } from '../recipe'

import { RecipeModel } from '../models';
import { MOCK_RECIPES} from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [ RecipeDetail, FormsModule, RouterModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

  protected readonly show = signal(false);

  // Initialize the recipe signal with the first recipe from the mock data
  // Alternatively, you could initialize it with null and handle that case in the template
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  //protected recipes = signal<RecipeModel[]>(MOCK_RECIPES);

  protected recipes = inject(Recipe).recipes; // Access the recipes signal from the Recipe service

  protected searchTerm = signal('');

  protected filteredRecipes = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    return this.recipes().filter(r => r.name.toLowerCase().includes(query));
  });

  protected logMessage(message: string): void {
    console.log(message);
  }

  protected setRecipe(selectedRecipe: RecipeModel): void {
    this.recipe.set(selectedRecipe);
    this.show.set(true);
  }

  protected updateSearch(newVal: string): void{
    this.searchTerm.set(newVal); 
  }
  
}

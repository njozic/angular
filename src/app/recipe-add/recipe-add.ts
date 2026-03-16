import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RecipeModel } from '../models';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-add',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-add.html',
  styleUrl: './recipe-add.css',
})
export class RecipeAdd {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly recipeService = inject(Recipe);

  protected recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
    imageUrl: ['', Validators.required]
  });

  protected cancel(): void {
    this.router.navigate(['/']);
  }

  protected addRecipe(): void {
    if (this.recipeForm.valid) {

      const values = this.recipeForm.value;

    const newRecipe = {
      id: Date.now(),
      name: values.name ?? '',
      description: values.description ?? '',
      imageUrl: values.imageUrl ?? '',
      ingredients: []
    };

      this.recipeService.addRecipe(newRecipe);
      this.router.navigate(['/']);
    }

  }

}

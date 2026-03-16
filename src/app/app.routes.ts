import { Routes } from '@angular/router';
import { RecipeList} from './recipe-list/recipe-list'
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeAdd } from './recipe-add/recipe-add';

export const routes: Routes = [

    { path: '', component: RecipeList },
    { path: 'recipes/:id', component: RecipeDetail },
    { path: 'add', component: RecipeAdd },

];

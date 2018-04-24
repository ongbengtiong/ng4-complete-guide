import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Recipe', 'Recip!', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg?itok=ELbVlLN7'),
    new Recipe('A Recipe 2', 'Recip!', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg?itok=ELbVlLN7')
  ];


  constructor() { }
  getRecipes() {
    return this.recipes.slice();
    }
}

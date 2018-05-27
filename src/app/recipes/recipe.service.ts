import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Burger', 'Burger!', 'http://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23566/sonic-burger.jpg?itok=zGk5pjcI', [
      new Ingredient('Apples', 7),
      new Ingredient('Tomatoes', 2),
    ]),
    new Recipe('Pizza', 'Pizza!', 'https://townepizzas.com/assets/images/s13.png', [
      new Ingredient('Oranges', 5),
      new Ingredient('Grapes', 6),
    ])
  ];


  constructor(private shoppingListService: ShoppingListService) { }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

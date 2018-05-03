import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService { 

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
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}

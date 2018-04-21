import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Recipe', 'Recip!', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg?itok=ELbVlLN7'),
    new Recipe('A Recipe 2', 'Recip!', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/09/frying-pan-pizza.jpg?itok=ELbVlLN7')
  ]; 
  constructor() { 
    
  }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}

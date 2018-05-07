import { Ingredient } from "../shared/ingredient.model";
import { Output } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('Tomatoes', 10),
    ];

    startedEditing = new Subject<number>();

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService ) {

    }
    storeRecipes() {
        return this.http.put('https://ng-recipe-book-1fb60.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}
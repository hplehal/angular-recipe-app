import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Meatballs', 'This is Hartej Special Meatballs',
          'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055',[
            new Ingredient('Meat', 1), 
            new Ingredient('Tomato Sauce', 20)]),
        new Recipe('Burger', 'This is the fattest burger you\'ll have',
        'https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000342894470.jpg?strip=all&w=720',[
            new Ingredient('Buns', 2),
            new Ingredient('Patty', 2),
            new Ingredient('Tomatoes', 1),
            new Ingredient('Onion', 1),
            new Ingredient('Cheese', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
       return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(i: number, newRecipe: Recipe){
        this.recipes[i] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(i: number){
        this.recipes.splice(i,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
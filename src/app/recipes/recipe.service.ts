import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'This is simply a tasty schnitzel',
          'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055',[
            new Ingredient('Meat', 1), 
            new Ingredient('Fries', 20)]),
        new Recipe('Burger', 'This is the fattest burger you\'ll have',
        'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-how-to-juiciest-turkey-meatballs%2FHow-to-Make-the-Best-Juiciest-Turkey-Meatballs_055',[
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

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}
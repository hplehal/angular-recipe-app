import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [ 
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 2)
  ];

  constructor() {}

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(i: number){
    return this.ingredients[i];
  }

  ingAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.ingAdded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(i : number, updateIngredient: Ingredient){
    this.ingredients[i] = updateIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(i:number){
    this.ingredients.splice(i,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe ;
  id: number;
  
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
   this.route.params
      .subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )

  }

  onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

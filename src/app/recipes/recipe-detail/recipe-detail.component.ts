import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe ;
  
  constructor(private shoppingListService: ShoppingListService,
              private router: Router) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }
}

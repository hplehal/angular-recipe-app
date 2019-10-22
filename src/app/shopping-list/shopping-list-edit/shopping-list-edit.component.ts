import { Component, OnInit} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(f: NgForm){
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.ingAdded(newIngredient);
  }

}

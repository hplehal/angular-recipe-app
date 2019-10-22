import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { format } from 'url';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f', { static: false }) shoppingListForm : NgForm;
  private subscription: Subscription;
  editedItemIndex: number; 
  editedItem : Ingredient;
  editMode = false;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({ 
                  name: this.editedItem.name, 
                  amount: this.editedItem.amount})
        }
      );
  }

  onAddItem(f: NgForm){
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex , newIngredient);
    } else {
      this.shoppingListService.ingAdded(newIngredient);
    }
    this.editMode = false;
    f.reset();
  }
  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

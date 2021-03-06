import {Component,ElementRef,OnInit, ViewChild} from "@angular/core";

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls : ["./list-common.css","./list.css"],
    providers: [GroceryListService]
})

export class ListComponent implements OnInit{
    
    groceryList:Array<Grocery>= [];
    grocery="";
    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    isLoading=true;

    constructor(private groceryListService:GroceryListService){}

    ngOnInit(){
        this.isLoading = true;
        this.groceryListService.load()
        .subscribe(loadedGroceries => {
          loadedGroceries.forEach((groceryObject) => {
            this.groceryList.unshift(groceryObject);
          });
          this.isLoading = false;
        });
    }

    add() {
        if (this.grocery.trim() === "") {
          alert("Enter a grocery item");
          return;
        }
      
        // Dismiss the keyboard
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
      
        this.groceryListService.add(this.grocery)
          .subscribe(
            groceryObject => {
              this.groceryList.unshift(groceryObject);
              this.grocery = "";
            },
            () => {
              alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
              });
              this.grocery = "";
            }
          )
      }
}
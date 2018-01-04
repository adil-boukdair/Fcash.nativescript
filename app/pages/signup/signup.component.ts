import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "ui/list-picker";

let pokemonList = ["Customer", "Business"];


@Component({
    selector:"signup",
    moduleId:module.id,
    templateUrl:"./signup.html",
    styleUrls:["./signup-common.css","./signup.css"],
    providers :[]
})


export class SignupComponent {

 
    public picked:  number;
    public customerOrBusiness : Array<string>;

    constructor(private routerExtensions: RouterExtensions
            ){
                this.customerOrBusiness = ["Customer", "Business","Employee"];
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = picker.selectedIndex;
    }
 
    public next(){

        if(this.picked==0){ 
            console.log("Signup Customer");
        } 
        else if(this.picked==1){
            this.routerExtensions.navigate(['business-info']);
            console.log("Signup Business");
        }
        else if(this.picked==2){
            console.log("Signup Employee");
        }
 
    }

 
}


import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
 

@Component({
    selector:"business-cash-back",
    moduleId:module.id,
    templateUrl:"./cashBack.html",
    styleUrls:["./cashBack-common.css","./cashBack.css"],
    providers :[]
})


export class CashBackComponent {

 
    constructor(private routerExtensions: RouterExtensions
            ){

    }

  

    public next(){

        this.routerExtensions.navigate(['business-location']);
    }

 
}


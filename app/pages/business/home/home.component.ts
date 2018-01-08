import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
 

@Component({
    selector:"business-home",
    moduleId:module.id,
    templateUrl:"./home.html",
    styleUrls:["./home-common.css","./home.css"],
    providers :[]
}) 
 

export class BusinessHomeComponent {

    isLoading:boolean;
 
    constructor(private routerExtensions: RouterExtensions
            ){

                this.isLoading=true;
    }

  

    public next(){
 
    }

 
}


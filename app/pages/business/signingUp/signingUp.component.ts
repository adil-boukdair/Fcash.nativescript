import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
 

@Component({
    selector:"signing-up",
    moduleId:module.id,
    templateUrl:"./signingUp.html",
    styleUrls:["./signingUp-common.css","./signingUp.css"],
    providers :[]
}) 


export class SigningUpComponent {

    isLoading:boolean;
 
    constructor(private routerExtensions: RouterExtensions
            ){

                this.isLoading=true;
    }

  

    public next(){
 
    }

 
}


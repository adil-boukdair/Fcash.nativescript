import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector:"signup",
    moduleId:module.id,
    templateUrl:"./signup.html",
    styleUrls:["./signup-common.css","./signup.css"],
    providers :[]
})


export class SignupComponent {

    constructor(private routerExtensions: RouterExtensions
            ){
 
    }

 
}


import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
 

@Component({
    selector:"business-info",
    moduleId:module.id,
    templateUrl:"./info.html",
    styleUrls:["./info-common.css","./info.css"],
    providers :[]
})


export class BusinessInfoComponent {

 
    constructor(private routerExtensions: RouterExtensions
            ){

    }

  

    public next(){
 
    }

 
}


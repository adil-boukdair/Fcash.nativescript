import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
 

@Component({
    selector:"business-location",
    moduleId:module.id,
    templateUrl:"./location.html",
    styleUrls:["./location-common.css","./location.css"],
    providers :[]
}) 


export class LocationComponent {

 
    constructor(private routerExtensions: RouterExtensions
            ){

    }

  

    public next(){

        this.routerExtensions.navigate(['business-signing-up']);
 
    }

 
}


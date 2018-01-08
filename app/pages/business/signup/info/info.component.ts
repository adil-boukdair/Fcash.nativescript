import {Component} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "ui/list-picker";
 

@Component({
    selector:"business-info",
    moduleId:module.id,
    templateUrl:"./info.html",
    styleUrls:["./info-common.css","./info.css"],
    providers :[]
})


export class BusinessInfoComponent {
    public picked:  number;
    public customerOrBusiness : Array<string>;
 
    constructor(private routerExtensions: RouterExtensions
            ){

    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = picker.selectedIndex;
    }

    public next(){
 
    }

}


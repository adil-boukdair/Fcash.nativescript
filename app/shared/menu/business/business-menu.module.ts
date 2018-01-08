import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { BusinessMenuItemComponent } from "./business-menu-item/business-menu-item.component";
import { BusinessMenuComponent } from "./business-menu/business-menu.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        BusinessMenuComponent,
        BusinessMenuItemComponent
    ],
    exports: [
        BusinessMenuComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BusinessMenuModule { }

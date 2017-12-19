//** Angular Module
import { NgModule ,NO_ERRORS_SCHEMA } from "@angular/core";
import {Http} from "@angular/http";
 

//** NS Module
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";

//** */

import { AppComponent } from "./app.component";
import {routes,navigatableComponents} from "./app.routing";


 

@NgModule({
  imports: [
    //NS Modules
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptLocalizeModule
    //NG Modules
    
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents// this array contains all the components that we are going to use in our app
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

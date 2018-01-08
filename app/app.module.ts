//** Angular Module
import { NgModule ,NO_ERRORS_SCHEMA } from "@angular/core";
import {Http} from "@angular/http";
 

//** NS Module
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";

//** Customer Modules  */

/** Shared Modules */
import {BusinessMenuModule} from "./shared/menu/business/business-menu.module"
/** Pipes */
import {CapitalizePipe} from "./pipes/capitalize.pipe";
//**/
  
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
    NativeScriptLocalizeModule,
    //Shared Modules
    BusinessMenuModule
    //NG Modules

    
  ],
  declarations: [
    AppComponent,
        //Pipes
        CapitalizePipe,
        //
    ...navigatableComponents// this array contains all the components that we are going to use in our app
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

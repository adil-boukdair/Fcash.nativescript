// Angular Module
import { NgModule } from "@angular/core";

// NS Module
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import {routes,navigatableComponents} from "./app.routing";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents// this array contains all the components that we are going to use in our app
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//** Angular Module
var core_1 = require("@angular/core");
//** NS Module
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-localize/angular");
//** Customer Modules  */
/** Pipes */
var capitalize_pipe_1 = require("./pipes/capitalize.pipe");
//**/
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                //NS Modules
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                angular_1.NativeScriptLocalizeModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                //Pipes
                capitalize_pipe_1.CapitalizePipe
            ].concat(app_routing_1.navigatableComponents // this array contains all the components that we are going to use in our app
            ),
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQkFBbUI7QUFDbkIsc0NBQTJEO0FBSTNELGNBQWM7QUFDZCxnRkFBOEU7QUFDOUUsa0RBQWlFO0FBQ2pFLG9EQUFvRTtBQUNwRSxzREFBdUU7QUFDdkUseURBQTJFO0FBRTNFLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osMkRBQXVEO0FBQ3ZELEtBQUs7QUFFTCxpREFBK0M7QUFDL0MsNkNBQTJEO0FBNEIzRDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBdkJyQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2dCQUN4QyxvQ0FBMEI7YUFJM0I7WUFDRCxZQUFZO2dCQUNWLDRCQUFZO2dCQUNSLE9BQU87Z0JBQ1AsZ0NBQWM7cUJBRWYsbUNBQXFCLENBQUEsNkVBQTZFO2FBQ3RHO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKiBBbmd1bGFyIE1vZHVsZVxuaW1wb3J0IHsgTmdNb2R1bGUgLE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuIFxuXG4vLyoqIE5TIE1vZHVsZVxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRMb2NhbGl6ZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWxpemUvYW5ndWxhclwiO1xuXG4vLyoqIEN1c3RvbWVyIE1vZHVsZXMgICovXG4vKiogUGlwZXMgKi9cbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gXCIuL3BpcGVzL2NhcGl0YWxpemUucGlwZVwiO1xuLy8qKi9cbiBcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7cm91dGVzLG5hdmlnYXRhYmxlQ29tcG9uZW50c30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuXG4gXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAvL05TIE1vZHVsZXNcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBOYXRpdmVTY3JpcHRMb2NhbGl6ZU1vZHVsZSxcbiAgICAvL05HIE1vZHVsZXNcblxuICAgIFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIC8vUGlwZXNcbiAgICAgICAgQ2FwaXRhbGl6ZVBpcGUsXG4gICAgICAgIC8vXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLy8gdGhpcyBhcnJheSBjb250YWlucyBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCB3ZSBhcmUgZ29pbmcgdG8gdXNlIGluIG91ciBhcHBcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19
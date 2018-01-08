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
/** Shared Modules */
var business_menu_module_1 = require("./shared/menu/business/business-menu.module");
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
                //Shared Modules
                business_menu_module_1.BusinessMenuModule
                //NG Modules
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQkFBbUI7QUFDbkIsc0NBQTJEO0FBSTNELGNBQWM7QUFDZCxnRkFBOEU7QUFDOUUsa0RBQWlFO0FBQ2pFLG9EQUFvRTtBQUNwRSxzREFBdUU7QUFDdkUseURBQTJFO0FBRTNFLHlCQUF5QjtBQUV6QixxQkFBcUI7QUFDckIsb0ZBQThFO0FBQzlFLFlBQVk7QUFDWiwyREFBdUQ7QUFDdkQsS0FBSztBQUVMLGlEQUErQztBQUMvQyw2Q0FBMkQ7QUE4QjNEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF6QnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLG9DQUEwQjtnQkFDMUIsZ0JBQWdCO2dCQUNoQix5Q0FBa0I7Z0JBQ2xCLFlBQVk7YUFHYjtZQUNELFlBQVk7Z0JBQ1YsNEJBQVk7Z0JBQ1IsT0FBTztnQkFDUCxnQ0FBYztxQkFFZixtQ0FBcUIsQ0FBQSw2RUFBNkU7YUFDdEc7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqIEFuZ3VsYXIgTW9kdWxlXG5pbXBvcnQgeyBOZ01vZHVsZSAsTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG4gXG5cbi8vKiogTlMgTW9kdWxlXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdExvY2FsaXplTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbGl6ZS9hbmd1bGFyXCI7XG5cbi8vKiogQ3VzdG9tZXIgTW9kdWxlcyAgKi9cblxuLyoqIFNoYXJlZCBNb2R1bGVzICovXG5pbXBvcnQge0J1c2luZXNzTWVudU1vZHVsZX0gZnJvbSBcIi4vc2hhcmVkL21lbnUvYnVzaW5lc3MvYnVzaW5lc3MtbWVudS5tb2R1bGVcIlxuLyoqIFBpcGVzICovXG5pbXBvcnQge0NhcGl0YWxpemVQaXBlfSBmcm9tIFwiLi9waXBlcy9jYXBpdGFsaXplLnBpcGVcIjtcbi8vKiovXG4gIFxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtyb3V0ZXMsbmF2aWdhdGFibGVDb21wb25lbnRzfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5cbiBcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8vTlMgTW9kdWxlc1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5hdGl2ZVNjcmlwdExvY2FsaXplTW9kdWxlLFxuICAgIC8vU2hhcmVkIE1vZHVsZXNcbiAgICBCdXNpbmVzc01lbnVNb2R1bGVcbiAgICAvL05HIE1vZHVsZXNcblxuICAgIFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIC8vUGlwZXNcbiAgICAgICAgQ2FwaXRhbGl6ZVBpcGUsXG4gICAgICAgIC8vXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLy8gdGhpcyBhcnJheSBjb250YWlucyBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCB3ZSBhcmUgZ29pbmcgdG8gdXNlIGluIG91ciBhcHBcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19
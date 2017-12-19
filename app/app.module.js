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
//** */
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //NS Modules
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            angular_1.NativeScriptLocalizeModule
            //NG Modules
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents // this array contains all the components that we are going to use in our app
        ),
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQkFBbUI7QUFDbkIsc0NBQTJEO0FBSTNELGNBQWM7QUFDZCxnRkFBOEU7QUFDOUUsa0RBQWlFO0FBQ2pFLG9EQUFvRTtBQUNwRSxzREFBdUU7QUFDdkUseURBQTJFO0FBRTNFLE9BQU87QUFFUCxpREFBK0M7QUFDL0MsNkNBQTJEO0FBd0IzRCxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFuQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7WUFDeEMsb0NBQTBCO1lBQzFCLFlBQVk7U0FFYjtRQUNELFlBQVk7WUFDViw0QkFBWTtpQkFDVCxtQ0FBcUIsQ0FBQSw2RUFBNkU7U0FDdEc7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vKiogQW5ndWxhciBNb2R1bGVcbmltcG9ydCB7IE5nTW9kdWxlICxOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbiBcblxuLy8qKiBOUyBNb2R1bGVcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TG9jYWxpemVNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsaXplL2FuZ3VsYXJcIjtcblxuLy8qKiAqL1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge3JvdXRlcyxuYXZpZ2F0YWJsZUNvbXBvbmVudHN9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cblxuIFxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy9OUyBNb2R1bGVzXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgTmF0aXZlU2NyaXB0TG9jYWxpemVNb2R1bGVcbiAgICAvL05HIE1vZHVsZXNcbiAgICBcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50cy8vIHRoaXMgYXJyYXkgY29udGFpbnMgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgd2UgYXJlIGdvaW5nIHRvIHVzZSBpbiBvdXIgYXBwXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==
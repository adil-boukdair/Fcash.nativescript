"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var business_menu_item_component_1 = require("./menu/business/business-menu-item/business-menu-item.component");
var business_menu_component_1 = require("./menu/business/business-menu/business-menu.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                business_menu_component_1.MyDrawerComponent,
                business_menu_item_component_1.MyDrawerItemComponent
            ],
            exports: [
                business_menu_component_1.MyDrawerComponent,
                angular_1.NativeScriptUISideDrawerModule
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGtFQUF3RjtBQUV4RixnSEFBd0c7QUFDeEcsaUdBQTBGO0FBbUIxRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWpCeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDJDQUFpQjtnQkFDakIsb0RBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDJDQUFpQjtnQkFDakIsd0NBQThCO2FBQ2pDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgTXlEcmF3ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVudS9idXNpbmVzcy9idXNpbmVzcy1tZW51LWl0ZW0vYnVzaW5lc3MtbWVudS1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNeURyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL21lbnUvYnVzaW5lc3MvYnVzaW5lc3MtbWVudS9idXNpbmVzcy1tZW51LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTXlEcmF3ZXJDb21wb25lbnQsXHJcbiAgICAgICAgTXlEcmF3ZXJJdGVtQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE15RHJhd2VyQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XHJcbiJdfQ==
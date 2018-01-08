"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var business_menu_item_component_1 = require("./business-menu-item/business-menu-item.component");
var business_menu_component_1 = require("./business-menu/business-menu.component");
var BusinessMenuModule = (function () {
    function BusinessMenuModule() {
    }
    BusinessMenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                business_menu_component_1.BusinessMenuComponent,
                business_menu_item_component_1.BusinessMenuItemComponent
            ],
            exports: [
                business_menu_component_1.BusinessMenuComponent,
                angular_1.NativeScriptUISideDrawerModule
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BusinessMenuModule);
    return BusinessMenuModule;
}());
exports.BusinessMenuModule = BusinessMenuModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXNpbmVzcy1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsa0VBQXdGO0FBRXhGLGtHQUE4RjtBQUM5RixtRkFBZ0Y7QUFtQmhGO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFqQjlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDViwrQ0FBcUI7Z0JBQ3JCLHdEQUF5QjthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDTCwrQ0FBcUI7Z0JBQ3JCLHdDQUE4QjthQUNqQztZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IEJ1c2luZXNzTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9idXNpbmVzcy1tZW51LWl0ZW0vYnVzaW5lc3MtbWVudS1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCdXNpbmVzc01lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9idXNpbmVzcy1tZW51L2J1c2luZXNzLW1lbnUuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBCdXNpbmVzc01lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQnVzaW5lc3NNZW51SXRlbUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBCdXNpbmVzc01lbnVDb21wb25lbnQsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzTWVudU1vZHVsZSB7IH1cclxuIl19
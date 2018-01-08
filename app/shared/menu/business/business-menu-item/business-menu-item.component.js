"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
var BusinessMenuItemComponent = (function () {
    function BusinessMenuItemComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    BusinessMenuItemComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the MyDrawerItemComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
    };
    /* ***********************************************************
    * Use the "tap" event handler of the GridLayout component for handling navigation item taps.
    * The "tap" event handler of the app drawer item <GridLayout> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    BusinessMenuItemComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BusinessMenuItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BusinessMenuItemComponent.prototype, "route", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BusinessMenuItemComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], BusinessMenuItemComponent.prototype, "isSelected", void 0);
    BusinessMenuItemComponent = __decorate([
        core_1.Component({
            selector: "BusinessMenuItem",
            moduleId: module.id,
            templateUrl: "./business-menu-item.component.html",
            styleUrls: ["./business-menu-item.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], BusinessMenuItemComponent);
    return BusinessMenuItemComponent;
}());
exports.BusinessMenuItemComponent = BusinessMenuItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtbWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1c2luZXNzLW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRS9EOzs4REFFOEQ7QUFPOUQ7SUFNSSxtQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsZ0RBQVksR0FBWixVQUFhLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUExQlE7UUFBUixZQUFLLEVBQUU7OzREQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7OzREQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7OzJEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O2lFQUFxQjtJQUpwQix5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDcEQsQ0FBQzt5Q0FPd0MseUJBQWdCO09BTjdDLHlCQUF5QixDQTRCckM7SUFBRCxnQ0FBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEtlZXAgZGF0YSB0aGF0IGlzIGRpc3BsYXllZCBhcyBkcmF3ZXIgaXRlbXMgaW4gdGhlIE15RHJhd2VyIGNvbXBvbmVudCBjbGFzcy5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJCdXNpbmVzc01lbnVJdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9idXNpbmVzcy1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9idXNpbmVzcy1tZW51LWl0ZW0uY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcm91dGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIE15RHJhd2VySXRlbUNvbXBvbmVudCBcIm9uSW5pdFwiIGV2ZW50IGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSB0aGUgcHJvcGVydGllcyBkYXRhIHZhbHVlcy5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgXCJ0YXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSBHcmlkTGF5b3V0IGNvbXBvbmVudCBmb3IgaGFuZGxpbmcgbmF2aWdhdGlvbiBpdGVtIHRhcHMuXHJcbiAgICAqIFRoZSBcInRhcFwiIGV2ZW50IGhhbmRsZXIgb2YgdGhlIGFwcCBkcmF3ZXIgaXRlbSA8R3JpZExheW91dD4gaXMgdXNlZCB0byBuYXZpZ2F0ZSB0aGUgYXBwXHJcbiAgICAqIGJhc2VkIG9uIHRoZSB0YXBwZWQgbmF2aWdhdGlvbkl0ZW0ncyByb3V0ZS5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
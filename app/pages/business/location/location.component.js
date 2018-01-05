"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var LocationComponent = (function () {
    function LocationComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    LocationComponent.prototype.next = function () {
        this.routerExtensions.navigate(['signing-up']);
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: "business-location",
            moduleId: module.id,
            templateUrl: "./location.html",
            styleUrls: ["./location-common.css", "./location.css"],
            providers: []
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHNEQUErRDtBQVkvRDtJQUdJLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUd0RCxDQUFDO0lBSU0sZ0NBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRW5ELENBQUM7SUFkUSxpQkFBaUI7UUFUN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxtQkFBbUI7WUFDNUIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsRUFBQyxpQkFBaUI7WUFDN0IsU0FBUyxFQUFDLENBQUMsdUJBQXVCLEVBQUMsZ0JBQWdCLENBQUM7WUFDcEQsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQzt5Q0FNd0MseUJBQWdCO09BSDdDLGlCQUFpQixDQWlCN0I7SUFBRCx3QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwiYnVzaW5lc3MtbG9jYXRpb25cIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9sb2NhdGlvbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9sb2NhdGlvbi1jb21tb24uY3NzXCIsXCIuL2xvY2F0aW9uLmNzc1wiXSxcclxuICAgIHByb3ZpZGVycyA6W11cclxufSkgXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IHtcclxuXHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICApe1xyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgcHVibGljIG5leHQoKXtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnc2lnbmluZy11cCddKTtcclxuIFxyXG4gICAgfVxyXG5cclxuIFxyXG59XHJcblxyXG4iXX0=
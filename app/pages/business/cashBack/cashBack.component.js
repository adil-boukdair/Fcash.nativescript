"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var CashBackComponent = (function () {
    function CashBackComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CashBackComponent.prototype.next = function () {
        this.routerExtensions.navigate(['business-location']);
    };
    return CashBackComponent;
}());
CashBackComponent = __decorate([
    core_1.Component({
        selector: "business-cash-back",
        moduleId: module.id,
        templateUrl: "./cashBack.html",
        styleUrls: ["./cashBack-common.css", "./cashBack.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CashBackComponent);
exports.CashBackComponent = CashBackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaEJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaEJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHNEQUErRDtBQVkvRCxJQUFhLGlCQUFpQjtJQUcxQiwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHdEQsQ0FBQztJQUlNLGdDQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFHTCx3QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksaUJBQWlCO0lBVDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsb0JBQW9CO1FBQzdCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixXQUFXLEVBQUMsaUJBQWlCO1FBQzdCLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixFQUFDLGdCQUFnQixDQUFDO1FBQ3BELFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7cUNBTXdDLHlCQUFnQjtHQUg3QyxpQkFBaUIsQ0FnQjdCO0FBaEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG4gXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwiYnVzaW5lc3MtY2FzaC1iYWNrXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vY2FzaEJhY2suaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vY2FzaEJhY2stY29tbW9uLmNzc1wiLFwiLi9jYXNoQmFjay5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnMgOltdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhc2hCYWNrQ29tcG9uZW50IHtcclxuXHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICApe1xyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgcHVibGljIG5leHQoKXtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnYnVzaW5lc3MtbG9jYXRpb24nXSk7XHJcbiAgICB9XHJcblxyXG4gXHJcbn1cclxuXHJcbiJdfQ==
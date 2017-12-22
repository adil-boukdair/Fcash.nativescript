"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var BusinessInfoComponent = (function () {
    function BusinessInfoComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    BusinessInfoComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = picker.selectedIndex;
    };
    BusinessInfoComponent.prototype.next = function () {
    };
    return BusinessInfoComponent;
}());
BusinessInfoComponent = __decorate([
    core_1.Component({
        selector: "business-info",
        moduleId: module.id,
        templateUrl: "./info.html",
        styleUrls: ["./info-common.css", "./info.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], BusinessInfoComponent);
exports.BusinessInfoComponent = BusinessInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxzREFBK0Q7QUFhL0QsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBR3RELENBQUM7SUFFTSxvREFBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM1QixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sb0NBQUksR0FBWDtJQUVBLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlkscUJBQXFCO0lBVGpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsZUFBZTtRQUN4QixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsV0FBVyxFQUFDLGFBQWE7UUFDekIsU0FBUyxFQUFDLENBQUMsbUJBQW1CLEVBQUMsWUFBWSxDQUFDO1FBQzVDLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7cUNBT3dDLHlCQUFnQjtHQUo3QyxxQkFBcUIsQ0FrQmpDO0FBbEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcbiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJidXNpbmVzcy1pbmZvXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vaW5mby5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9pbmZvLWNvbW1vbi5jc3NcIixcIi4vaW5mby5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnMgOltdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzSW5mb0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcGlja2VkOiAgbnVtYmVyO1xyXG4gICAgcHVibGljIGN1c3RvbWVyT3JCdXNpbmVzcyA6IEFycmF5PHN0cmluZz47XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICApe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLnBpY2tlZCA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXh0KCl7XHJcbiBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SigningUpComponent = (function () {
    function SigningUpComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.isLoading = true;
    }
    SigningUpComponent.prototype.next = function () {
        this.routerExtensions.navigate(["business-home"]);
    };
    SigningUpComponent = __decorate([
        core_1.Component({
            selector: "signing-up",
            moduleId: module.id,
            templateUrl: "./signingUp.html",
            styleUrls: ["./signingUp-common.css", "./signingUp.css"],
            providers: []
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SigningUpComponent);
    return SigningUpComponent;
}());
exports.SigningUpComponent = SigningUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluZ1VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbmdVcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBWS9EO0lBSUksNEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzFDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFJTSxpQ0FBSSxHQUFYO1FBRUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFdEQsQ0FBQztJQWhCUSxrQkFBa0I7UUFUOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxZQUFZO1lBQ3JCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUMsa0JBQWtCO1lBQzlCLFNBQVMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLGlCQUFpQixDQUFDO1lBQ3RELFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7eUNBT3dDLHlCQUFnQjtPQUo3QyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcInNpZ25pbmctdXBcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9zaWduaW5nVXAuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vc2lnbmluZ1VwLWNvbW1vbi5jc3NcIixcIi4vc2lnbmluZ1VwLmNzc1wiXSxcclxuICAgIHByb3ZpZGVycyA6W11cclxufSkgXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbmdVcENvbXBvbmVudCB7XHJcblxyXG4gICAgaXNMb2FkaW5nOmJvb2xlYW47XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nPXRydWU7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIHB1YmxpYyBuZXh0KCl7IFxyXG4gXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImJ1c2luZXNzLWhvbWVcIl0pO1xyXG5cclxuICAgIH1cclxuXHJcbiBcclxufVxyXG5cclxuIl19
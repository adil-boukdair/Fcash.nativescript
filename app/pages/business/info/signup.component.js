"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pokemonList = ["Customer", "Business"];
var SignupComponent = (function () {
    function SignupComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.customerOrBusiness = ["Customer", "Business", "Employee"];
    }
    SignupComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = picker.selectedIndex;
    };
    SignupComponent.prototype.next = function () {
        if (this.picked == 0) {
            console.log("Signup Customer");
        }
        else if (this.picked == 1) {
            console.log("Signup Business");
        }
        else if (this.picked == 2) {
            console.log("Signup Employee");
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: "signup",
        moduleId: module.id,
        templateUrl: "./signup.html",
        styleUrls: ["./signup-common.css", "./signup.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBRy9ELElBQUksV0FBVyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBWTNDLElBQWEsZUFBZTtJQU14Qix5QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sOENBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDNUIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVNLDhCQUFJLEdBQVg7UUFFSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBRUwsQ0FBQztJQUdMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxlQUFlO0lBVDNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsUUFBUTtRQUNqQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsV0FBVyxFQUFDLGVBQWU7UUFDM0IsU0FBUyxFQUFDLENBQUMscUJBQXFCLEVBQUMsY0FBYyxDQUFDO1FBQ2hELFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7cUNBU3dDLHlCQUFnQjtHQU43QyxlQUFlLENBK0IzQjtBQS9CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcblxyXG5sZXQgcG9rZW1vbkxpc3QgPSBbXCJDdXN0b21lclwiLCBcIkJ1c2luZXNzXCJdO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJzaWdudXBcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9zaWdudXAuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vc2lnbnVwLWNvbW1vbi5jc3NcIixcIi4vc2lnbnVwLmNzc1wiXSxcclxuICAgIHByb3ZpZGVycyA6W11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgcG9rZW1vbnM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwdWJsaWMgcGlja2VkOiAgbnVtYmVyO1xyXG4gICAgcHVibGljIGN1c3RvbWVyT3JCdXNpbmVzcyA6IEFycmF5PHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbWVyT3JCdXNpbmVzcyA9IFtcIkN1c3RvbWVyXCIsIFwiQnVzaW5lc3NcIixcIkVtcGxveWVlXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHRoaXMucGlja2VkID0gcGlja2VyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHQoKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5waWNrZWQ9PTApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBDdXN0b21lclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnBpY2tlZD09MSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIEJ1c2luZXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMucGlja2VkPT0yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWdudXAgRW1wbG95ZWVcIik7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9XHJcblxyXG4gXHJcbn1cclxuXHJcbiJdfQ==
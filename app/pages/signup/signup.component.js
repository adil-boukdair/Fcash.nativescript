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
            this.routerExtensions.navigate(['business-info']);
            console.log("Signup Business");
        }
        else if (this.picked == 2) {
            console.log("Signup Employee");
        }
    };
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
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQStEO0FBRy9ELElBQUksV0FBVyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBWTNDO0lBTUkseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQzVCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUVMLENBQUM7SUE3QlEsZUFBZTtRQVQzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFFBQVE7WUFDakIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsRUFBQyxlQUFlO1lBQzNCLFNBQVMsRUFBQyxDQUFDLHFCQUFxQixFQUFDLGNBQWMsQ0FBQztZQUNoRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO3lDQVN3Qyx5QkFBZ0I7T0FON0MsZUFBZSxDQWdDM0I7SUFBRCxzQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxuXHJcbmxldCBwb2tlbW9uTGlzdCA9IFtcIkN1c3RvbWVyXCIsIFwiQnVzaW5lc3NcIl07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcInNpZ251cFwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL3NpZ251cC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9zaWdudXAtY29tbW9uLmNzc1wiLFwiLi9zaWdudXAuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzIDpbXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG5cclxuIFxyXG4gICAgcHVibGljIHBpY2tlZDogIG51bWJlcjtcclxuICAgIHB1YmxpYyBjdXN0b21lck9yQnVzaW5lc3MgOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lck9yQnVzaW5lc3MgPSBbXCJDdXN0b21lclwiLCBcIkJ1c2luZXNzXCIsXCJFbXBsb3llZVwiXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLnBpY2tlZCA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgbmV4dCgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnBpY2tlZD09MCl7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBDdXN0b21lclwiKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5waWNrZWQ9PTEpe1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydidXNpbmVzcy1pbmZvJ10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ251cCBCdXNpbmVzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnBpY2tlZD09Mil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbnVwIEVtcGxveWVlXCIpO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgfVxyXG5cclxuIFxyXG59XHJcblxyXG4iXX0=
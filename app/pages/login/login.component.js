"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
// Services
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "good_adil@gmail.com";
        this.user.password = "adil";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigate(["signup"]);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "./pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsZ0NBQTZCO0FBSTdCLFdBQVc7QUFDWCwrREFBMkQ7QUFRM0QsSUFBYSxjQUFjO0lBUXpCLHdCQUNVLE1BQWEsRUFDYixXQUF1QixFQUN2QixJQUFTO1FBRlQsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQUs7UUFQbkIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFTekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLHFCQUFxQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUMvQyxDQUFDO0lBSUYsK0JBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0YscUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBekJ5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUxuQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFDLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDcEUsQ0FBQztxQ0FVaUIsZUFBTTtRQUNELDBCQUFXO1FBQ2xCLFdBQUk7R0FYUixjQUFjLENBOEIxQjtBQTlCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsRWxlbWVudFJlZixWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmwgOlwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIHVzZXI6VXNlcjtcclxuICBpc0xvZ2dpbmdJbjpib29sZWFuID0gdHJ1ZTtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjsgLy8gZ2V0IFJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBTdGFja0xheW91dCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOlJvdXRlciwgXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwYWdlOlBhZ2UpeyBcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsPVwiZ29vZF9hZGlsQGdtYWlsLmNvbVwiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkPVwiYWRpbFwiO1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIH1cclxuIFxyXG5cclxuIFxyXG4gc2lnblVwKCl7IFxyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNpZ251cFwiXSk7XHJcbiB9XHJcblxyXG5cclxufSJdfQ==
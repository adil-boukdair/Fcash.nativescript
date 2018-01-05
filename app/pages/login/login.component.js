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
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsZ0NBQTZCO0FBSTdCLFdBQVc7QUFDWCwrREFBMkQ7QUFRM0Q7SUFRRSx3QkFDVSxNQUFhLEVBQ2IsV0FBdUIsRUFDdkIsSUFBUztRQUZULFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBUG5CLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBU3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUlGLCtCQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXRCd0I7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7cURBQUM7SUFMbkMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBQyxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3BFLENBQUM7eUNBVWlCLGVBQU07WUFDRCwwQkFBVztZQUNsQixXQUFJO09BWFIsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxFbGVtZW50UmVmLFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybCA6XCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgdXNlcjpVc2VyO1xyXG4gIGlzTG9nZ2luZ0luOmJvb2xlYW4gPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmOyAvLyBnZXQgUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IFN0YWNrTGF5b3V0IGZvciB0aGUgYW5pbWF0aW9uXHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6UGFnZSl7IFxyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLnVzZXIuZW1haWw9XCJnb29kX2FkaWxAZ21haWwuY29tXCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQ9XCJhZGlsXCI7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcbiAgfVxyXG4gXHJcblxyXG4gXHJcbiBzaWduVXAoKXsgXHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2lnbnVwXCJdKTtcclxuIH1cclxuXHJcblxyXG59Il19
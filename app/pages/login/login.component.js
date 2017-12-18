"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
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
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account"); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            alert("Your Account was successfully created.");
            _this.toggleDisplay();
        }, function () {
            alert("Unfortunatlly we were unable to create your account.");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsZ0NBQTZCO0FBQzdCLCtCQUE0QjtBQUc1QixXQUFXO0FBQ1gsK0RBQTJEO0FBUTNELElBQWEsY0FBYztJQVF6Qix3QkFDVSxNQUFhLEVBQ2IsV0FBdUIsRUFDdkIsSUFBUztRQUZULFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBUG5CLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBU3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUlGLCtCQUFNLEdBQU47UUFFQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUVGLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsR0FBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDNUUsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFFSixDQUFDO0lBR0QsOEJBQUssR0FBTDtRQUFBLGlCQVFDO1FBTkEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM5QixTQUFTLENBQ1IsY0FBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsRUFDbkMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsOENBQThDLENBQUMsRUFBckQsQ0FBcUQsQ0FDbkUsQ0FBQztJQUVILENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBV0M7UUFUQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM3QztZQUNFLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUFBLENBQUMsRUFDeEI7WUFDRSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQTtRQUMvRCxDQUFDLENBQ0QsQ0FBQztJQUVKLENBQUM7SUFHRixxQkFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUFqRXlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBTG5DLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7UUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUMsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNwRSxDQUFDO3FDQVVpQixlQUFNO1FBQ0QsMEJBQVc7UUFDbEIsV0FBSTtHQVhSLGNBQWMsQ0FzRTFCO0FBdEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxFbGVtZW50UmVmLFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG4vLyBTZXJ2aWNlc1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybCA6XCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgdXNlcjpVc2VyO1xyXG4gIGlzTG9nZ2luZ0luOmJvb2xlYW4gPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmOyAvLyBnZXQgUmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IFN0YWNrTGF5b3V0IGZvciB0aGUgYW5pbWF0aW9uXHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBhZ2U6UGFnZSl7IFxyXG5cclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLnVzZXIuZW1haWw9XCJnb29kX2FkaWxAZ21haWwuY29tXCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQ9XCJhZGlsXCI7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gc3VibWl0KCl7XHJcbiBcclxuICBpZih0aGlzLmlzTG9nZ2luZ0luKXtcclxuICAgIHRoaXMubG9naW4oKTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgfVxyXG5cclxuIH1cclxuXHJcbiB0b2dnbGVEaXNwbGF5KCl7XHJcbiAgdGhpcy5pc0xvZ2dpbmdJbj0hdGhpcy5pc0xvZ2dpbmdJbjtcclxuICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKTogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcclxuICAgIGR1cmF0aW9uOiAyMDBcclxuICB9KTtcclxuXHJcbiB9XHJcblxyXG5cclxuIGxvZ2luKCl7XHJcblxyXG4gIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKCk9PnRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgICAgKGVycm9yKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50XCIpXHJcbiAgKTtcclxuXHJcbiB9XHJcbiBzaWduVXAoKXtcclxuICAgIFxyXG4gICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gICAgKCkgPT57XHJcbiAgICAgIGFsZXJ0KFwiWW91ciBBY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO30sXHJcbiAgICAoKSA9PntcclxuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0bGx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpICBcclxuICAgIH1cclxuICAgKTtcclxuICAgXHJcbiB9XHJcblxyXG5cclxufSJdfQ==
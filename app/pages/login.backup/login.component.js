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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLCtDQUE0QztBQUM1QywwQ0FBdUM7QUFDdkMsZ0NBQTZCO0FBQzdCLCtCQUE0QjtBQUc1QixXQUFXO0FBQ1gsK0RBQTJEO0FBUTNEO0lBUUUsd0JBQ1UsTUFBYSxFQUNiLFdBQXVCLEVBQ3ZCLElBQVM7UUFGVCxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBSztRQVBuQixnQkFBVyxHQUFXLElBQUksQ0FBQztRQVN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO0lBQy9DLENBQUM7SUFJRiwrQkFBTSxHQUFOO1FBRUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFFRixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNDLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEIsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzVFLFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUdELDhCQUFLLEdBQUw7UUFBQSxpQkFRQztRQU5BLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNSLGNBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLEVBQXJELENBQXFELENBQ25FLENBQUM7SUFFSCxDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUFBLGlCQVdDO1FBVEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDN0M7WUFDRSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFBQSxDQUFDLEVBQ3hCO1lBQ0UsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUE7UUFDL0QsQ0FBQyxDQUNELENBQUM7SUFFSixDQUFDO0lBOUR3QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTtxREFBQztJQUxuQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFDLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDcEUsQ0FBQzt5Q0FVaUIsZUFBTTtZQUNELDBCQUFXO1lBQ2xCLFdBQUk7T0FYUixjQUFjLENBc0UxQjtJQUFELHFCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LEVsZW1lbnRSZWYsVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbi8vIFNlcnZpY2VzXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsIDpcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICB1c2VyOlVzZXI7XHJcbiAgaXNMb2dnaW5nSW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7IC8vIGdldCBSZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgU3RhY2tMYXlvdXQgZm9yIHRoZSBhbmltYXRpb25cclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIFxyXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTpVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgcGFnZTpQYWdlKXsgXHJcblxyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbD1cImdvb2RfYWRpbEBnbWFpbC5jb21cIjtcclxuICAgIHRoaXMudXNlci5wYXNzd29yZD1cImFkaWxcIjtcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcclxuICB9XHJcblxyXG5cclxuXHJcbiBzdWJtaXQoKXtcclxuIFxyXG4gIGlmKHRoaXMuaXNMb2dnaW5nSW4pe1xyXG4gICAgdGhpcy5sb2dpbigpO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdGhpcy5zaWduVXAoKTtcclxuICB9XHJcblxyXG4gfVxyXG5cclxuIHRvZ2dsZURpc3BsYXkoKXtcclxuICB0aGlzLmlzTG9nZ2luZ0luPSF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxyXG4gICAgZHVyYXRpb246IDIwMFxyXG4gIH0pO1xyXG5cclxuIH1cclxuXHJcblxyXG4gbG9naW4oKXtcclxuXHJcbiAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoKT0+dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pLFxyXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnRcIilcclxuICApO1xyXG5cclxuIH1cclxuIHNpZ25VcCgpe1xyXG4gICAgXHJcbiAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcbiAgICAoKSA9PntcclxuICAgICAgYWxlcnQoXCJZb3VyIEFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7fSxcclxuICAgICgpID0+e1xyXG4gICAgICBhbGVydChcIlVuZm9ydHVuYXRsbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIikgIFxyXG4gICAgfVxyXG4gICApO1xyXG4gICBcclxuIH1cclxuXHJcblxyXG59Il19
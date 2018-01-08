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
    return CashBackComponent;
}());
exports.CashBackComponent = CashBackComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaEJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaEJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHNEQUErRDtBQVkvRDtJQUdJLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUd0RCxDQUFDO0lBSU0sZ0NBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWJRLGlCQUFpQjtRQVQ3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLG9CQUFvQjtZQUM3QixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLGlCQUFpQjtZQUM3QixTQUFTLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsQ0FBQztZQUNwRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO3lDQU13Qyx5QkFBZ0I7T0FIN0MsaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJidXNpbmVzcy1jYXNoLWJhY2tcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9jYXNoQmFjay5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9jYXNoQmFjay1jb21tb24uY3NzXCIsXCIuL2Nhc2hCYWNrLmNzc1wiXSxcclxuICAgIHByb3ZpZGVycyA6W11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FzaEJhY2tDb21wb25lbnQge1xyXG5cclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICl7XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpe1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydidXNpbmVzcy1sb2NhdGlvbiddKTtcclxuICAgIH1cclxuXHJcbiBcclxufVxyXG5cclxuIl19
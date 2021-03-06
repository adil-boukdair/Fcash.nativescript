"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var LocationComponent = (function () {
    function LocationComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    LocationComponent.prototype.next = function () {
        this.routerExtensions.navigate(['business-signing-up']);
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: "business-location",
            moduleId: module.id,
            templateUrl: "./location.html",
            styleUrls: ["./location-common.css", "./location.css"],
            providers: []
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHNEQUErRDtBQVkvRDtJQUdJLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUd0RCxDQUFDO0lBSU0sZ0NBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQWRRLGlCQUFpQjtRQVQ3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLG1CQUFtQjtZQUM1QixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLGlCQUFpQjtZQUM3QixTQUFTLEVBQUMsQ0FBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsQ0FBQztZQUNwRCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO3lDQU13Qyx5QkFBZ0I7T0FIN0MsaUJBQWlCLENBaUI3QjtJQUFELHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbiBcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJidXNpbmVzcy1sb2NhdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL2xvY2F0aW9uLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL2xvY2F0aW9uLWNvbW1vbi5jc3NcIixcIi4vbG9jYXRpb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzIDpbXVxyXG59KSBcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xyXG5cclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcbiAgICAgICAgICAgICl7XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpe1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWydidXNpbmVzcy1zaWduaW5nLXVwJ10pO1xyXG4gXHJcbiAgICB9XHJcblxyXG4gXHJcbn1cclxuXHJcbiJdfQ==
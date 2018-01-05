"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var signup_component_1 = require("./pages/signup/signup.component");
// Business Signup
var info_component_1 = require("./pages/business/info/info.component");
var cashBack_component_1 = require("./pages/business/cashBack/cashBack.component");
var location_component_1 = require("./pages/business/location/location.component");
var signingUp_component_1 = require("./pages/business/signingUp/signingUp.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "signup", component: signup_component_1.SignupComponent },
    //Business
    { path: "business-info", component: info_component_1.BusinessInfoComponent },
    { path: "business-cash-back", component: cashBack_component_1.CashBackComponent },
    { path: "business-location", component: location_component_1.LocationComponent },
    { path: "signing-up", component: signingUp_component_1.SigningUpComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    signup_component_1.SignupComponent,
    //Business
    info_component_1.BusinessInfoComponent,
    cashBack_component_1.CashBackComponent,
    location_component_1.LocationComponent,
    signingUp_component_1.SigningUpComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUE2RDtBQUM3RCw4REFBMEQ7QUFDMUQsb0VBQWtFO0FBQ2xFLGtCQUFrQjtBQUNsQix1RUFBMkU7QUFDM0UsbUZBQStFO0FBQy9FLG1GQUErRTtBQUMvRSxzRkFBa0Y7QUFFckUsUUFBQSxNQUFNLEdBQUU7SUFDakIsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsOEJBQWEsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGtDQUFlLEVBQUM7SUFDekMsVUFBVTtJQUNWLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsc0NBQXFCLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsU0FBUyxFQUFDLHNDQUFpQixFQUFDO0lBQ3ZELEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFNBQVMsRUFBQyxzQ0FBaUIsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLHdDQUFrQixFQUFDO0NBQ25ELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFFO0lBQ2hDLGdDQUFjO0lBQ2QsOEJBQWE7SUFDYixrQ0FBZTtJQUNmLFVBQVU7SUFDVixzQ0FBcUI7SUFDckIsc0NBQWlCO0lBQ2pCLHNDQUFpQjtJQUNqQix3Q0FBa0I7Q0FDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcclxuLy8gQnVzaW5lc3MgU2lnbnVwXHJcbmltcG9ydCB7QnVzaW5lc3NJbmZvQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9idXNpbmVzcy9pbmZvL2luZm8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2FzaEJhY2tDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2J1c2luZXNzL2Nhc2hCYWNrL2Nhc2hCYWNrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9idXNpbmVzcy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduaW5nVXBDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2J1c2luZXNzL3NpZ25pbmdVcC9zaWduaW5nVXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzPSBbXHJcbiAgICB7cGF0aDpcIlwiLGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6XCJsaXN0XCIsY29tcG9uZW50Okxpc3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6XCJzaWdudXBcIixjb21wb25lbnQ6U2lnbnVwQ29tcG9uZW50fSxcclxuICAgIC8vQnVzaW5lc3NcclxuICAgIHtwYXRoOlwiYnVzaW5lc3MtaW5mb1wiLGNvbXBvbmVudDpCdXNpbmVzc0luZm9Db21wb25lbnR9LFxyXG4gICAge3BhdGg6XCJidXNpbmVzcy1jYXNoLWJhY2tcIixjb21wb25lbnQ6Q2FzaEJhY2tDb21wb25lbnR9LFxyXG4gICAge3BhdGg6XCJidXNpbmVzcy1sb2NhdGlvblwiLGNvbXBvbmVudDpMb2NhdGlvbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDpcInNpZ25pbmctdXBcIixjb21wb25lbnQ6U2lnbmluZ1VwQ29tcG9uZW50fSAgXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID1bXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIExpc3RDb21wb25lbnQsXHJcbiAgICBTaWdudXBDb21wb25lbnQsXHJcbiAgICAvL0J1c2luZXNzXHJcbiAgICBCdXNpbmVzc0luZm9Db21wb25lbnQsXHJcbiAgICBDYXNoQmFja0NvbXBvbmVudCxcclxuICAgIExvY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgU2lnbmluZ1VwQ29tcG9uZW50XHJcbl07Il19
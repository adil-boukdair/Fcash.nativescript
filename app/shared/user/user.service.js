"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers }).map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data.Result.access_token;
            console.log("token: " + data.Result.access_token);
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUFzRDtBQUN0RCw4QkFBbUM7QUFDbkMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBaUM7QUFLakM7SUFHSSxxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRWhDLDhCQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBRSxPQUFPLEVBQzFCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxRQUFRLEVBQUcsSUFBSSxDQUFDLEtBQUs7WUFDckIsS0FBSyxFQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2xCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTtTQUMzQixDQUFDLEVBQ0YsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7YUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBSUQsMkJBQUssR0FBTCxVQUFNLElBQVM7UUFDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLFVBQVU7U0FDekIsQ0FBQyxFQUNGLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUNwQixDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNKLGVBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFHRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaERNLFdBQVc7UUFGdkIsaUJBQVUsRUFBRTt5Q0FLZ0IsV0FBSTtPQUhwQixXQUFXLENBa0R2QjtJQUFELGtCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe31cclxuIFxyXG4gICAgcmVnaXN0ZXIodXNlcjpVc2VyKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9bmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgK1wiVXNlcnNcIixcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFVzZXJuYW1lIDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgRW1haWwgOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICB9KSxcclxuICAgICAgICB7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcil7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcIm9hdXRoL3Rva2VuXCIsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBncmFudF90eXBlOiBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOmhlYWRlcnN9XHJcbiAgICAgICAgKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIitkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbn0iXX0=
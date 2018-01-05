"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = true;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"],
            providers: [grocery_list_service_1.GroceryListService]
        }),
        __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUdyRSxrRkFBK0U7QUFXL0U7SUFPSSx1QkFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFMekQsZ0JBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQy9CLFlBQU8sR0FBQyxFQUFFLENBQUM7UUFFWCxjQUFTLEdBQUMsSUFBSSxDQUFDO0lBRTRDLENBQUM7SUFFNUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUM3QixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3hCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFBQSxpQkF3Qkc7UUF2QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdEMsU0FBUyxDQUNSLFVBQUEsYUFBYTtZQUNYLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFDRDtZQUNFLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUF4QzRCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBSm5ELGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUcsQ0FBQyxtQkFBbUIsRUFBQyxZQUFZLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDbEMsQ0FBQzt5Q0FTeUMseUNBQWtCO09BUGhELGFBQWEsQ0E2Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEVsZW1lbnRSZWYsT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcclxuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzIDogW1wiLi9saXN0LWNvbW1vbi5jc3NcIixcIi4vbGlzdC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIFxyXG4gICAgZ3JvY2VyeUxpc3Q6QXJyYXk8R3JvY2VyeT49IFtdO1xyXG4gICAgZ3JvY2VyeT1cIlwiO1xyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIGlzTG9hZGluZz10cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOkdyb2NlcnlMaXN0U2VydmljZSl7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxufSJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, words) {
        if (value) {
            if (words) {
                return value.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            }
            else {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
        return value;
    };
    CapitalizePipe = __decorate([
        core_1.Pipe({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBUWxEO0lBQUE7SUFjQSxDQUFDO0lBWkMsa0NBQVMsR0FBVCxVQUFVLEtBQVMsRUFBRSxLQUFhO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQWJVLGNBQWM7UUFMNUIsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQztPQUdXLGNBQWMsQ0FjMUI7SUFBRCxxQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjYXBpdGFsaXplJ1xyXG4gIH0pXHJcblxyXG5cclxuICBleHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6YW55LCB3b3Jkczpib29sZWFuKSB7XHJcbiAgXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh3b3Jkcykge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcYlxcdy9nLCBmaXJzdCA9PiBmaXJzdC50b0xvY2FsZVVwcGVyQ2FzZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9Il19
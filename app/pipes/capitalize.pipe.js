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
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({
        name: 'capitalize'
    })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBUWxELElBQWEsY0FBYztJQUEzQjtJQWNBLENBQUM7SUFaQyxrQ0FBUyxHQUFULFVBQVUsS0FBUyxFQUFFLEtBQWE7UUFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQXpCLENBQXlCLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBQ0gsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGNBQWM7SUFMNUIsV0FBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLFlBQVk7S0FDbkIsQ0FBQztHQUdXLGNBQWMsQ0FjMUI7QUFkWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnY2FwaXRhbGl6ZSdcclxuICB9KVxyXG5cclxuXHJcbiAgZXhwb3J0IGNsYXNzIENhcGl0YWxpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOmFueSwgd29yZHM6Ym9vbGVhbikge1xyXG4gIFxyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBpZiAod29yZHMpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXGJcXHcvZywgZmlyc3QgPT4gZmlyc3QudG9Mb2NhbGVVcHBlckNhc2UoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgfSJdfQ==
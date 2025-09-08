import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let AttributeDirective = class AttributeDirective {
    el;
    constructor(el) {
        this.el = el;
        console.log(el);
    }
    color;
    // This input allows the directive to accept a color value
    onMouseEnter() {
        this.highlight(this.color || 'yellow');
    }
    onMouseLeave() {
        this.highlight("");
    }
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
        //  on met à jour le background de l'élément sur lequel est appliquée la directive
    }
};
__decorate([
    Input('appAttribute')
], AttributeDirective.prototype, "color", void 0);
__decorate([
    HostListener('mouseenter')
], AttributeDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], AttributeDirective.prototype, "onMouseLeave", null);
AttributeDirective = __decorate([
    Directive({
        selector: '[appAttribute]'
    })
], AttributeDirective);
export { AttributeDirective };
//# sourceMappingURL=attribut.directive.js.map
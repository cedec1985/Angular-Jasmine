import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let Attribute = class Attribute {
    /**
   * @param {any} el
   */
    constructor(el) {
        this.el = el;
        console.log(el);
      this.color = '';
      /**
       * @type {undefined}
       */

    }
    // This input allows the directive to accept a color value
    onMouseEnter() {
        this.highlight(this.color || 'yellow');
    }
    onMouseLeave() {
        this.highlight("");
    }
    /**
   * @param {string} color
   */
    highlight(color) {
        this.el.nativeElement.style.backgroundColor = color;
        //  on met à jour le background de l'élément sur lequel est appliquée la directive
    }
};
__decorate([
    Input('appAttribute')
], Attribute.prototype, "color", void 0);
__decorate([
    HostListener('mouseenter')
], Attribute.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], Attribute.prototype, "onMouseLeave", null);
Attribute = __decorate([
    Directive({
        selector: '[appAttribute]'
    })
], Attribute);
export { Attribute };
//# sourceMappingURL=attribut.directive.js.map

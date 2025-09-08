import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
let PageNotFound = class PageNotFound {
    message = "Oups, page non trouvée !";
};
PageNotFound = __decorate([
    Component({
        selector: 'app-page-not-found',
        imports: [CommonModule, RouterLink],
        templateUrl: './page-not-found.html',
        styleUrl: './page-not-found.css'
    })
], PageNotFound);
export { PageNotFound };
//# sourceMappingURL=page-not-found.js.map
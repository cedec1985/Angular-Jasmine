import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app-routing.module.js';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        // @ts-ignore
        provideRouter(routes),
        provideStore(),
        provideEffects()
        // provideState({state :initialState})
    ]
};
//# sourceMappingURL=app.config.js.map

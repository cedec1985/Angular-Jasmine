import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(AppRoutingModule.routes),
        provideStore(),
        provideEffects(),
        // provideState({state :initialState})
    ]
};
//# sourceMappingURL=app.config.js.map
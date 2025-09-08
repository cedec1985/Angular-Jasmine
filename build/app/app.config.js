import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore, createReducer } from '@ngrx/store';
import { routes } from './app-routing.module';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({ createReducer }),
        provideEffects([]),
        provideClientHydration(),
        provideHttpClient()
    ]
};
//# sourceMappingURL=app.config.js.map
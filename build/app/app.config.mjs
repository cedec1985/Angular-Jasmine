import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStore, createReducer } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { routes } from './app-routing.module.mjs';
import { initialState } from './reducers/counter-reducer/counter-reducer.mjs';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore({ createReducer }),
        provideEffects(EffectsModule),
        provideClientHydration(),
        provideHttpClient(),
        provideMockStore({ initialState })
    ]
};
//# sourceMappingURL=app.config.js.map

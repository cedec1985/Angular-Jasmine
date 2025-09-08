import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { createEffect, EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStore, createReducer } from '@ngrx/store';
import { MockState, provideMockStore } from '@ngrx/store/testing';
import { routes } from './app-routing.module';
import { reducer } from './reducers/counter-reducer';
import { initialState } from './reducers/counter-reducer/counter-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({createReducer}),
    provideEffects(EffectsModule),
    provideClientHydration(),
    provideHttpClient(),
    provideMockStore({initialState})
  ]
};




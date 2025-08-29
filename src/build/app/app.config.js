import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app-routing.module';
import { AppModule } from './app.module';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideStore(),
        provideEffects(),
        // provideState({state :initialState})
    ]
};
platformBrowserDynamic()
    .bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=app.config.js.map
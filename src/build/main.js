import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from 'app/app.component.js';
import { appConfig } from 'app/app.config.js';
import { AppModule } from 'app/app.module.js';
bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
platformBrowserDynamic()
    .bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map

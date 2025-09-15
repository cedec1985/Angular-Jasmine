import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component.mjs';
import { appConfig } from './src/app/app.config.mjs';
import { AppModule } from './src/app/app.module.mjs';
platformBrowser()
    .bootstrapModule(AppModule).catch(err => console.error(err));
// Or use standalone components
bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map

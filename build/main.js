import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
platformBrowser()
    .bootstrapModule(AppModule).catch(err => console.error(err));
// Or use standalone components
bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map
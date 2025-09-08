import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component';
import { appConfig } from './src/app/app.config';
import { AppModule } from './src/app/app.module';


platformBrowser()
.bootstrapModule(AppModule).catch(err => console.error(err));

// Or use standalone components

bootstrapApplication(AppComponent,appConfig)
.catch(err=>console.error(err))


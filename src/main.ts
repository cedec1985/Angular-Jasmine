import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { appConfig } from 'app/app.config';


bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));


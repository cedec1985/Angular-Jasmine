import 'zone.js/testing';
import 'zone.js/zone-testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
// Initialise l'environnement de test Angular
getTestBed().initTestEnvironment(
  BrowserTestingModule,
platformBrowserTesting(),
);
// Then we find all the tests.

// const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
// context.keys().map(context);


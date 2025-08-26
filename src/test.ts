import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";


const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Initialise l'environnement de test Angular
TestBed.initTestEnvironment(
  BrowserTestingModule,
platformBrowserTesting(),
);

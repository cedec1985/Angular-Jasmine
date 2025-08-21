import { TestBed,ComponentFixture } from '@angular/core/testing';
import {APP_BASE_HREF}    from '@angular/common';
import { AppComponent } from './app.component.js';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { findComponent } from './helpers/spec.helpers.component.js';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
       schemas: [NO_ERRORS_SCHEMA],

    }).compileComponents();

    beforeEach(() =>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

   it('contient un router-outlet', () => {
    const el = findComponent(fixture, 'router-outlet');
    expect(el).toBeTruthy();
  });
});
})



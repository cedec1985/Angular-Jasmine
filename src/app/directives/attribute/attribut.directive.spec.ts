import {Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AttributeDirective } from './attribut.directive';

@Component({
  template: `<p [appAttribute]="'lightblue'">Texte de test</p>`
})
class TestComponent {}

  describe('Attribute Directive', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AttributeDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance of the directive', () => {
    const debugEl = fixture.debugElement.query(By.directive(AttributeDirective));
    expect(debugEl).not.toBeNull();
  });

  it('should apply background color on mouseenter', () => {
    const pEl = fixture.debugElement.query(By.css('p'));
    pEl.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    expect(pEl.nativeElement.style.backgroundColor).toBe('lightblue');
  });

  it('should remove background color on mouseleave', () => {
    const pEl = fixture.debugElement.query(By.css('p'));

    // Simulate mouseenter first
    pEl.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();

    // Then simulate mouseleave
    pEl.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(pEl.nativeElement.style.backgroundColor).toBe('');
  });
});

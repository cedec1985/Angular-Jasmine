import { ElementRef } from '@angular/core';
import { Attribute } from './attribut.directive';

describe('Attribute', () => {
  it('should create an instance', () => {
    const directive = new Attribute(ElementRef.prototype as unknown as ElementRef);
    expect(directive).toBeTruthy();
  });
});

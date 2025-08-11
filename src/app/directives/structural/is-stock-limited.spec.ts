import { TemplateRef, ViewContainerRef } from '@angular/core';
import { IsStockLimited } from './is-stock-limited';

describe('IsStockLimited', () => {
  it('should create an instance', () => {
    const directive = new IsStockLimited(TemplateRef.prototype, ViewContainerRef.prototype);
    expect(directive).toBeTruthy();
  });
});

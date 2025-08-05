/**
 * This service is not used in the counter app,
 * but here as an example for Jasmine Spies.
 */

import { TestBed } from '@angular/core/testing';


class TodosService {
constructor(
  // Bind `fetch ` to `window` to ensure that `window` is the `this` context
  private fetch = window.fetch.bind(window),
)
{}
/**
 * getTodos
 */
public async getTodos(): Promise<string[]> {
  const response = await this.fetch('/todos');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}
}
// Fake todos and response object
const todos=['shop groceries', 'clean the house', 'pay bills'];
const okResponse = new Response(JSON.stringify(todos), {
status : 200,
statusText: 'OK',
headers: { 'Content-Type': 'application/json' }
});
const errorResponse = new Response('Not Found', {
  status: 404,
  statusText: 'Not Found',
});

describe('TodosService', () => {
it('gets todos successfully', async () => {
  // Arrange
  const fetchspy = jasmine.createSpy('fetch').and.returnValue(okResponse);
  const todoService = new TodosService(fetchspy);
  // Act
  const actualTods = await todoService.getTodos();
  // Assert
  expect(actualTods).toEqual(todos);
  expect(fetchspy).toHaveBeenCalledWith('/todos');
});
it('handles an HTTP error when getting todos', async () => {
 // Arrange
  const fetchspy = jasmine.createSpy('fetch').and.returnValue(errorResponse);
  const todoService = new TodosService(fetchspy);
  // Act
  let error;
  try {
    await todoService.getTodos();
  } catch (e) {
    error = e;
  }
   // Assert
  expect(error).toEqual(new Error('HTTP error! status: 404 Not Found'));
  expect(fetchspy).toHaveBeenCalledWith('/todos');
});
});

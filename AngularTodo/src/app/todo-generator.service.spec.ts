import { TestBed } from '@angular/core/testing';

import { TodoGeneratorService } from './todo-generator.service';

describe('TodoGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoGeneratorService = TestBed.get(TodoGeneratorService);
    expect(service).toBeTruthy();
  });
});

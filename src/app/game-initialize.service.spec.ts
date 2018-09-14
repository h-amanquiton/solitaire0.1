import { TestBed, inject } from '@angular/core/testing';

import { GameInitializeService } from './game-initialize.service';

describe('GameInitializeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameInitializeService]
    });
  });

  it('should be created', inject([GameInitializeService], (service: GameInitializeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ColorManagerService } from './color-manager.service';

describe('ColorManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorManagerService]
    });
  });

  it('should be created', inject([ColorManagerService], (service: ColorManagerService) => {
    expect(service).toBeTruthy();
  }));
});

import {LoginButtonComponent} from './login-button.component';
import {inject, TestBed} from '@angular/core/testing';
import {LocalFireAuthService} from '../../service/localfireauth/local-fire-auth.service';
import {TestLocalFireAuthService} from '../../service/localfireauth/test-local-fire-auth.service';

describe('LoginButtonDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: LocalFireAuthService, useClass: TestLocalFireAuthService }]
    });
  });

  it('should be created', inject([LocalFireAuthService], (service: LocalFireAuthService) => {
    const button = new LoginButtonComponent(service);
    expect(button).toBeDefined();
  }));
});

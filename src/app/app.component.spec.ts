import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {LocalFireAuthService} from './service/localfireauth/local-fire-auth.service';
import {TestLocalFireAuthService} from './service/localfireauth/test-local-fire-auth.service';
import {LoginButtonComponent} from './components/loginbutton/login-button.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: LocalFireAuthService, useClass: TestLocalFireAuthService }],
      declarations: [
        AppComponent,
        LoginButtonComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

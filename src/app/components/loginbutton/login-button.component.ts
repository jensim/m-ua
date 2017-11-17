import {Component} from '@angular/core';
import {LocalFireAuthService} from '../../service/localfireauth/local-fire-auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  public loginStateText = 'Login';

  constructor(public myAuth: LocalFireAuthService) {
  }

  pressLogin($event: Event) {
    console.info('Button kicked.');
    if (this.myAuth.isSignedIn()) {
      this.myAuth.signOut();
    } else {
      this.myAuth.signIn();
    }
  }
}

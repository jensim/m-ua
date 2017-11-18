import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {LoginButtonComponent} from './components/loginbutton/login-button.component';
import {firebaseConfig} from '../environments/firebase.config';
import {LocalFireAuthService} from './service/localfireauth/local-fire-auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [AngularFireAuth, LocalFireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

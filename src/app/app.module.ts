import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Plugins
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { firebaseConfig } from '../config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OperationsPage } from '../pages/operations/operations';
import { AddPlayerPage } from '../pages/home/add-player/add-player';

// Providers
import { DatabaseService } from '../services/database.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OperationsPage,
    AddPlayerPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OperationsPage,
    AddPlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DatabaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

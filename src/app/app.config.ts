import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import{initializeApp, provideFirebaseApp} from'@angular/fire/app';
import{getAuth, provideAuth} from'@angular/fire/auth';
import {getDatabase, provideDatabase} from'@angular/fire/database'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ]
};

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [

    {
        path: '', component: HomeComponent
    },
  
   
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'help', component: HelpComponent
    },
    {
        path: 'features', component: FeaturesComponent
    }
];

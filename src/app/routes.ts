import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

const routeConfig: Routes = [
  {
	path: '',
	component: HomeComponent,
	title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
	path: 'home',
	component: HomeComponent,
	title: 'Home'
  },

  /*404 Error*/
  {
    path: '**',
    pathMatch: 'full',
    component: PnfComponent,
    title: '404 Page not found'
  }
];

export default routeConfig;

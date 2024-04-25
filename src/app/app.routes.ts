import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    title: 'Feel free to ask!',
    component: ContactComponent,
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: NotfoundComponent,
  },
];

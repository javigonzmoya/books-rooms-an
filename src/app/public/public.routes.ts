import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { SalasScreenComponent } from './salas-screen/salas-screen.component';

export const publicRoutes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'calendar', component: CalendarScreenComponent },
  { path: 'salas', component: SalasScreenComponent },
];

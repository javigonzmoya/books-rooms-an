import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PublicComponent } from './public.component';
import { SalasScreenComponent } from './salas-screen/salas-screen.component';

const routesChildren: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeScreenComponent },
      { path: 'calendar', component: CalendarScreenComponent },
      { path: 'salas', component: SalasScreenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesChildren)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

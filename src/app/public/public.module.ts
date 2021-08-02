import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CoreModule } from '../core/core.module';
import { CalendarScreenComponent } from './calendar-screen/calendar-screen.component';
import { PublicRoutingModule } from './public.routing.module';
import { SalasScreenComponent } from './salas-screen/salas-screen.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeScreenComponent,
    CalendarScreenComponent,
    SalasScreenComponent,
  ],
  imports: [CommonModule, CoreModule, PublicRoutingModule],
})
export class PublicModule {}

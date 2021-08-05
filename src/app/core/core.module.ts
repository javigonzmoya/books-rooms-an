import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NoFountComponent } from './components/no-fount/no-fount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [NavbarComponent, NoFountComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FullCalendarModule,
    NavbarComponent,
    NoFountComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}

import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar-screen',
  templateUrl: './calendar-screen.component.html',
  styleUrls: ['./calendar-screen.component.scss'],
})
export class CalendarScreenComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', start: new Date(), end: new Date('2021-07-30') },
      { title: 'event 2', start: '2021-07-29', end: '2021-07-29' },
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay',
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 4 },
        buttonText: '4 day',
      },
    },
  };

  handleDateClick(arg) {
    console.log(arg);
  }

  constructor() {}

  ngOnInit(): void {}
}

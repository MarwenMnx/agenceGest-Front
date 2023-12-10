import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'add-reservation', component: AddReservationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
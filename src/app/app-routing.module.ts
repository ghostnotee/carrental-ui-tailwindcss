import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/colour/:colourId', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

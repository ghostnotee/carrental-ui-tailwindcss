import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car-detail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  carWithDetails: CarDetail[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarsWithDetail();
  }

  getCarsWithDetail() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carWithDetails = response.data;
      this.dataLoaded = true;
    });
  }
}

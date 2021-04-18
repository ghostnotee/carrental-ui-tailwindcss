import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarWithDetailsByBrand(params['brandId']);
      } else if (params['colourId']) {
        this.getCarWithDetailByColour(params['colourId']);
      } else {
        this.getCarsWithDetail();
      }
    });
  }

  getCarsWithDetail() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carWithDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarWithDetailsByBrand(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.carWithDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarWithDetailByColour(colourId: number) {
    this.carService.getCarDetailsByColourId(colourId).subscribe((response) => {
      this.carWithDetails = response.data;
      this.dataLoaded = true;
    });
  }
}

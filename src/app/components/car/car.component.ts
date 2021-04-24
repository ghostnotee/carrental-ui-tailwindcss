import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/car-detail';
import { Colour } from 'src/app/models/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  carWithDetails: CarDetail[];
  filterText = '';
  brands: Brand[];
  brandId: number;
  colours: Colour[];
  colourId: number;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colourService: ColourService
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
    this.getBrands();
    this.getColours();
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

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColours() {
    this.colourService.getColours().subscribe((Response) => {
      this.colours = Response.data;
    });
  }

  customFiltering(brandId: number, colourId: number) {
    this.carService
      .getCarDetailsByBrandAndColourId(brandId, colourId)
      .subscribe((Response) => {
        this.carWithDetails = Response.data;
      });
  }
}

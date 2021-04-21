import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  car: CarDetail;
  images: Image[];

  constructor(
    private carService: CarService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetail(params['carId']);
      this.getImagesByCarId(params['carId']);
    });
  }

  getCarDetail(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.car = response.data[0];
    });
  }

  getImagesByCarId(carId: number) {
    this.imageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  dataLoaded = false;
  brands: Brand[] = [];
  currentBrand: Brand | null;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  deleteCurrentBrand() {
    this.currentBrand = null;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return 't-dimension bg-gradient-to-r from-teal-100 via-teal-50 to-white';
    } else {
      return 't-dimension';
    }
  }

  getAllBrandsClass() {
    if (!this.currentBrand) {
      return 't-dimension bg-gradient-to-r from-teal-100 via-teal-50 to-white';
    } else {
      return 't-dimension';
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car-detail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:5001/api/cars';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newUrl = this.apiUrl + '/getcardetail?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newUrl);
  }

  getCarDetailsByBrandId(
    brandId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcardetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByColourId(
    colourId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + '/getcardetailsbycolour?colourId=' + colourId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrandAndColourId(
    brandId: number,
    colourId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl +
      '/getcarsbybrandandcolourid?brandId=' +
      brandId +
      '&colourId=' +
      colourId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}

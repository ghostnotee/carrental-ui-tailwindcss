import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = 'https://localhost:5001/api/carimages';

  constructor(private httpClient: HttpClient) {}

  getImageById(imageId: number): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + '/getbyid?id=' + imageId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }

  getImagesByCarId(carId: number): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + '/getbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
}

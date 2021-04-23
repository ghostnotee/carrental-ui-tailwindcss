import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car-detail';

@Pipe({
  name: 'filterText',
})
export class FilterTextPipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText.length > 1 ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (c: CarDetail) =>
            c.carModelName.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            c.carBrandName.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            c.carColourName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}

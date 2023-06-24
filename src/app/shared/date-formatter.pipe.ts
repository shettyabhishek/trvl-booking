import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})

export class DateFormatterPipe implements PipeTransform {
  transform(value: string | Date | undefined,format: string): unknown {
    return moment(value).format(format);
  }
}

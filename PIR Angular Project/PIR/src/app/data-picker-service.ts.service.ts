import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPickerServiceTsService {

  private startDate="2022-08-01";
  private endDate="2022-10-31";

  setStartDate(value: string)
  {
     this.startDate=value;
  }

  getStartDate()
  {
      return this.startDate;
  }

  setEndDate(value: string)
  {
   this.endDate=value;
  }

  getEndDate()
  {
    return this.endDate;
  }
  
  constructor() { }
}

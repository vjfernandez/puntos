import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get(): any[] {
    const dataString = localStorage.getItem('data');
    if (dataString) {
      return (JSON.parse(dataString));
    } else {
      return [];
    }
  }

  set(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }
}

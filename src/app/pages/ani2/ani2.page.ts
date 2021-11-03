import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ani2',
  templateUrl: './ani2.page.html',
  styleUrls: ['./ani2.page.scss'],
})
export class Ani2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
 
}
interface Food {
  value: string;
  viewValue: string;
}



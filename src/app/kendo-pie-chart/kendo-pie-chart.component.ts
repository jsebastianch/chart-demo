import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-pie-chart',
  templateUrl: './kendo-pie-chart.component.html',
  styleUrls: ['./kendo-pie-chart.component.sass']
})
export class KendoPieChartComponent implements OnInit {

  public pieData: any = [
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

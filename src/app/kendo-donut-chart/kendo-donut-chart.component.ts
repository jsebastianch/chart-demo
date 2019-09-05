import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-donut-chart',
  templateUrl: './kendo-donut-chart.component.html',
  styleUrls: ['./kendo-donut-chart.component.sass']
})
export class KendoDonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }

}

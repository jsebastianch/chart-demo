import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-funnel-chart',
  templateUrl: './kendo-funnel-chart.component.html',
  styleUrls: ['./kendo-funnel-chart.component.sass']
})
export class KendoFunnelChartComponent implements OnInit {

  public model = [{
    stat: 'Impressions ',
    count: 434823,
    color: '#0e5a7e'
  }, {
    stat: 'Clicks',
    count: 356854,
    color: '#166f99'
  }, {
    stat: 'Unique Visitors',
    count: 280022,
    color: '#2185b4'
  }, {
    stat: 'Downloads',
    count: 190374,
    color: '#319fd2'
  }, {
    stat: 'Purchases',
    count: 120392,
    color: '#3eaee2'
  }];

  constructor() { }

  ngOnInit() {
  }

}

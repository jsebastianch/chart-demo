import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { KendoLineChartComponent } from './kendo-line-chart/kendo-line-chart.component';
import { KendoBarChartComponent } from './kendo-bar-chart/kendo-bar-chart.component';
import { KendoDonutChartComponent } from './kendo-donut-chart/kendo-donut-chart.component';
import { KendoRadarChartComponent } from './kendo-radar-chart/kendo-radar-chart.component';
import { KendoPieChartComponent } from './kendo-pie-chart/kendo-pie-chart.component';
import { KendoPolarChartComponent } from './kendo-polar-chart/kendo-polar-chart.component';
import { KendoBubbleChartComponent } from './kendo-bubble-chart/kendo-bubble-chart.component';
import { KendoScatterChartComponent } from './kendo-scatter-chart/kendo-scatter-chart.component';
import { KendoAreaChartComponent } from './kendo-area-chart/kendo-area-chart.component';
import { KendoFunnelChartComponent } from './kendo-funnel-chart/kendo-funnel-chart.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'polar-chart', component: PolarChartComponent },
  { path: 'bubble-chart', component: BubbleChartComponent },
  { path: 'scatter-chart', component: ScatterChartComponent },
  { path: 'kendo-line-chart', component: KendoLineChartComponent },
  { path: 'kendo-bar-chart', component: KendoBarChartComponent },
  { path: 'kendo-donut-chart', component: KendoDonutChartComponent },
  { path: 'kendo-radar-chart', component: KendoRadarChartComponent },
  { path: 'kendo-pie-chart', component: KendoPieChartComponent },
  { path: 'kendo-polar-chart', component: KendoPolarChartComponent },
  { path: 'kendo-bubble-chart', component: KendoBubbleChartComponent },
  { path: 'kendo-scatter-chart', component: KendoScatterChartComponent },
  { path: 'kendo-area-chart', component: KendoAreaChartComponent },
  { path: 'kendo-funnel-chart', component: KendoFunnelChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

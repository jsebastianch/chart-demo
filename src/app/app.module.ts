import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { ChartjsMenuComponent } from './chartjs-menu/chartjs-menu.component';
import { ChartsModule as KendoChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { KendoLineChartComponent } from './kendo-line-chart/kendo-line-chart.component';
import { KendoMenuComponent } from './kendo-menu/kendo-menu.component';
import { KendoBarChartComponent } from './kendo-bar-chart/kendo-bar-chart.component';
import { KendoDonutChartComponent } from './kendo-donut-chart/kendo-donut-chart.component';
import { KendoRadarChartComponent } from './kendo-radar-chart/kendo-radar-chart.component';
import { KendoPieChartComponent } from './kendo-pie-chart/kendo-pie-chart.component';
import { KendoPolarChartComponent } from './kendo-polar-chart/kendo-polar-chart.component';
import { KendoBubbleChartComponent } from './kendo-bubble-chart/kendo-bubble-chart.component';
import { KendoScatterChartComponent } from './kendo-scatter-chart/kendo-scatter-chart.component';
import { KendoAreaChartComponent } from './kendo-area-chart/kendo-area-chart.component';
import { KendoFunnelChartComponent } from './kendo-funnel-chart/kendo-funnel-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    LineChartComponent,
    PolarChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    ChartjsMenuComponent,
    KendoLineChartComponent,
    KendoMenuComponent,
    KendoBarChartComponent,
    KendoDonutChartComponent,
    KendoRadarChartComponent,
    KendoPieChartComponent,
    KendoPolarChartComponent,
    KendoBubbleChartComponent,
    KendoScatterChartComponent,
    KendoAreaChartComponent,
    KendoFunnelChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    KendoChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

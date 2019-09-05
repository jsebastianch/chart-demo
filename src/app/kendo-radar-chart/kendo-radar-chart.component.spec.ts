import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoRadarChartComponent } from './kendo-radar-chart.component';

describe('KendoRadarChartComponent', () => {
  let component: KendoRadarChartComponent;
  let fixture: ComponentFixture<KendoRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

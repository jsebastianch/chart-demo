import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoFunnelChartComponent } from './kendo-funnel-chart.component';

describe('KendoFunnelChartComponent', () => {
  let component: KendoFunnelChartComponent;
  let fixture: ComponentFixture<KendoFunnelChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoFunnelChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoFunnelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

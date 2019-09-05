import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoScatterChartComponent } from './kendo-scatter-chart.component';

describe('KendoScatterChartComponent', () => {
  let component: KendoScatterChartComponent;
  let fixture: ComponentFixture<KendoScatterChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoScatterChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

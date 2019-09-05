import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDonutChartComponent } from './kendo-donut-chart.component';

describe('KendoDonutChartComponent', () => {
  let component: KendoDonutChartComponent;
  let fixture: ComponentFixture<KendoDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

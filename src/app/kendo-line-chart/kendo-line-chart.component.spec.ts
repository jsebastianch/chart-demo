import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoLineChartComponent } from './kendo-line-chart.component';

describe('KendoLineChartComponent', () => {
  let component: KendoLineChartComponent;
  let fixture: ComponentFixture<KendoLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

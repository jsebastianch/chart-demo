import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoAreaChartComponent } from './kendo-area-chart.component';

describe('KendoAreaChartComponent', () => {
  let component: KendoAreaChartComponent;
  let fixture: ComponentFixture<KendoAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

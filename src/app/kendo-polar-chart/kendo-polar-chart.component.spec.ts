import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoPolarChartComponent } from './kendo-polar-chart.component';

describe('KendoPolarChartComponent', () => {
  let component: KendoPolarChartComponent;
  let fixture: ComponentFixture<KendoPolarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoPolarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoPolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

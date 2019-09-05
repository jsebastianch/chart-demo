import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoBarChartComponent } from './kendo-bar-chart.component';

describe('KendoBarChartComponent', () => {
  let component: KendoBarChartComponent;
  let fixture: ComponentFixture<KendoBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoBubbleChartComponent } from './kendo-bubble-chart.component';

describe('KendoBubbleChartComponent', () => {
  let component: KendoBubbleChartComponent;
  let fixture: ComponentFixture<KendoBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

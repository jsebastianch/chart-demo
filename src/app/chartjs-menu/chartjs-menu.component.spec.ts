import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsMenuComponent } from './chartjs-menu.component';

describe('ChartjsMenuComponent', () => {
  let component: ChartjsMenuComponent;
  let fixture: ComponentFixture<ChartjsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

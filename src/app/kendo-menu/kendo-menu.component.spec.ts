import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoMenuComponent } from './kendo-menu.component';

describe('KendoMenuComponent', () => {
  let component: KendoMenuComponent;
  let fixture: ComponentFixture<KendoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

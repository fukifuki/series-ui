import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeriesFormComponent } from './update-series-form.component';

describe('UpdateSeriesFormComponent', () => {
  let component: UpdateSeriesFormComponent;
  let fixture: ComponentFixture<UpdateSeriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProfileFormComponent } from './update-user-profile-form.component';

describe('UpdateUserProfileFormComponent', () => {
  let component: UpdateUserProfileFormComponent;
  let fixture: ComponentFixture<UpdateUserProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

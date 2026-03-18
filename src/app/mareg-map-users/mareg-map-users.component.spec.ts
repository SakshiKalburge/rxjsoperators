import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaregMapUsersComponent } from './mareg-map-users.component';

describe('MaregMapUsersComponent', () => {
  let component: MaregMapUsersComponent;
  let fixture: ComponentFixture<MaregMapUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaregMapUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaregMapUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedRoomComponent } from './allocated-room.component';

describe('AllocatedRoomComponent', () => {
  let component: AllocatedRoomComponent;
  let fixture: ComponentFixture<AllocatedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocatedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

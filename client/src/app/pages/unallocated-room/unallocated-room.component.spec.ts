import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedRoomComponent } from './unallocated-room.component';

describe('UnallocatedRoomComponent', () => {
  let component: UnallocatedRoomComponent;
  let fixture: ComponentFixture<UnallocatedRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnallocatedRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnallocatedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

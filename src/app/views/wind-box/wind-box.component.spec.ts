import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindBoxComponent } from './wind-box.component';

describe('WindBoxComponent', () => {
  let component: WindBoxComponent;
  let fixture: ComponentFixture<WindBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

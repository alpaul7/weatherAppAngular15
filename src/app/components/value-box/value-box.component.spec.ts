import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBoxComponent } from './value-box.component';

describe('ValueBoxComponent', () => {
  let component: ValueBoxComponent;
  let fixture: ComponentFixture<ValueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

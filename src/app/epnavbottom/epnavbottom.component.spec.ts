import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpnavbottomComponent } from './epnavbottom.component';

describe('EpnavbottomComponent', () => {
  let component: EpnavbottomComponent;
  let fixture: ComponentFixture<EpnavbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpnavbottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpnavbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

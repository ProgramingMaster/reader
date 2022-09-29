import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpnavComponent } from './epnav.component';

describe('EpnavComponent', () => {
  let component: EpnavComponent;
  let fixture: ComponentFixture<EpnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

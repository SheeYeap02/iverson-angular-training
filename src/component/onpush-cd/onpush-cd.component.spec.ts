import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushCdComponent } from './onpush-cd.component';

describe('OnpushCdComponent', () => {
  let component: OnpushCdComponent;
  let fixture: ComponentFixture<OnpushCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushCdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

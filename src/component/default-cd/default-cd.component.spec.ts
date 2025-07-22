import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdComponent } from './default-cd.component';

describe('DefaultCdComponent', () => {
  let component: DefaultCdComponent;
  let fixture: ComponentFixture<DefaultCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

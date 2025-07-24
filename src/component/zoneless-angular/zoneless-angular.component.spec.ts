import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessAngularComponent } from './zoneless-angular.component';

describe('ZonelessAngularComponent', () => {
  let component: ZonelessAngularComponent;
  let fixture: ComponentFixture<ZonelessAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

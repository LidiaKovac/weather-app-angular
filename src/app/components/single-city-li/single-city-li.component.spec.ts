import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCityLiComponent } from './single-city-li.component';

describe('SingleCityLiComponent', () => {
  let component: SingleCityLiComponent;
  let fixture: ComponentFixture<SingleCityLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCityLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCityLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

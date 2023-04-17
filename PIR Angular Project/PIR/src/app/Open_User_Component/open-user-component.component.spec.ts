import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenUserComponentComponent } from './open-user-component.component';

describe('OpenUserComponentComponent', () => {
  let component: OpenUserComponentComponent;
  let fixture: ComponentFixture<OpenUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

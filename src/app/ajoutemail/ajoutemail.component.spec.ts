import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutemailComponent } from './ajoutemail.component';

describe('AjoutemailComponent', () => {
  let component: AjoutemailComponent;
  let fixture: ComponentFixture<AjoutemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

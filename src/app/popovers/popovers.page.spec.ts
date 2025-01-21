import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoversPage } from './popovers.page';

describe('PopoversPage', () => {
  let component: PopoversPage;
  let fixture: ComponentFixture<PopoversPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

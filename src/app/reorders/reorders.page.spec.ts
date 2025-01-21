import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReordersPage } from './reorders.page';

describe('ReordersPage', () => {
  let component: ReordersPage;
  let fixture: ComponentFixture<ReordersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

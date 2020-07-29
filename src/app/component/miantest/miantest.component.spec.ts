import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiantestComponent } from './miantest.component';

describe('MiantestComponent', () => {
  let component: MiantestComponent;
  let fixture: ComponentFixture<MiantestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiantestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiantestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

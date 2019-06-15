import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrFixitComponent } from './mr-fixit.component';

describe('MrFixitComponent', () => {
  let component: MrFixitComponent;
  let fixture: ComponentFixture<MrFixitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrFixitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrFixitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

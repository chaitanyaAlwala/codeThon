import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostyourheartComponent } from './postyourheart.component';

describe('PostyourheartComponent', () => {
  let component: PostyourheartComponent;
  let fixture: ComponentFixture<PostyourheartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostyourheartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostyourheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

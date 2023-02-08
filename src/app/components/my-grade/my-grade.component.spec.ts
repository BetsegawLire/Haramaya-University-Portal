import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGradeComponent } from './my-grade.component';

describe('MyGradeComponent', () => {
  let component: MyGradeComponent;
  let fixture: ComponentFixture<MyGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStuffComponent } from './add-stuff.component';

describe('AddStuffComponent', () => {
  let component: AddStuffComponent;
  let fixture: ComponentFixture<AddStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownfilterComponent } from './dropdownfilter.component';

describe('DropdownfilterComponent', () => {
  let component: DropdownfilterComponent;
  let fixture: ComponentFixture<DropdownfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

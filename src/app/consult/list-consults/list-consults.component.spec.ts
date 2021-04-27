import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultsComponent } from './list-consults.component';

describe('ListConsultsComponent', () => {
  let component: ListConsultsComponent;
  let fixture: ComponentFixture<ListConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

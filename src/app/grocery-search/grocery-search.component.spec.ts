import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerySearchComponent } from './grocery-search.component';

describe('GrocerySearchComponent', () => {
  let component: GrocerySearchComponent;
  let fixture: ComponentFixture<GrocerySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrocerySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrocerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

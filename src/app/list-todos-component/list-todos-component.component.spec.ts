import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodosComponentComponent } from './list-todos-component.component';

describe('ListTodosComponentComponent', () => {
  let component: ListTodosComponentComponent;
  let fixture: ComponentFixture<ListTodosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBloqueComponent } from './lista-bloque.component';

describe('ListaBloqueComponent', () => {
  let component: ListaBloqueComponent;
  let fixture: ComponentFixture<ListaBloqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBloqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBloqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

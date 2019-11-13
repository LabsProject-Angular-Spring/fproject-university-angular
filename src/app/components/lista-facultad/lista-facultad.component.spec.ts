import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFacultadComponent } from './lista-facultad.component';

describe('ListaFacultadComponent', () => {
  let component: ListaFacultadComponent;
  let fixture: ComponentFixture<ListaFacultadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFacultadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

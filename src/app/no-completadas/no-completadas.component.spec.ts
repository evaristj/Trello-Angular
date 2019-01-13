import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCompletadasComponent } from './no-completadas.component';

describe('NoCompletadasComponent', () => {
  let component: NoCompletadasComponent;
  let fixture: ComponentFixture<NoCompletadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCompletadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCompletadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

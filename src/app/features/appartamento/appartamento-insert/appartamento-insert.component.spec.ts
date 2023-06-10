import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentoInsertComponent } from './appartamento-insert.component';

describe('AppartamentoInsertComponent', () => {
  let component: AppartamentoInsertComponent;
  let fixture: ComponentFixture<AppartamentoInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartamentoInsertComponent]
    });
    fixture = TestBed.createComponent(AppartamentoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

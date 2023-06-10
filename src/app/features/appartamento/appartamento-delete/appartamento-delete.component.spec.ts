import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentoDeleteComponent } from './appartamento-delete.component';

describe('AppartamentoDeleteComponent', () => {
  let component: AppartamentoDeleteComponent;
  let fixture: ComponentFixture<AppartamentoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartamentoDeleteComponent]
    });
    fixture = TestBed.createComponent(AppartamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

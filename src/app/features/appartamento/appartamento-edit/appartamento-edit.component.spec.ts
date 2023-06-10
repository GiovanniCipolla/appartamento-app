import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentoEditComponent } from './appartamento-edit.component';

describe('AppartamentoEditComponent', () => {
  let component: AppartamentoEditComponent;
  let fixture: ComponentFixture<AppartamentoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartamentoEditComponent]
    });
    fixture = TestBed.createComponent(AppartamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

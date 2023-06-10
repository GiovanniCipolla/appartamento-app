import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentoDetailComponent } from './appartamento-detail.component';

describe('AppartamentoDetailComponent', () => {
  let component: AppartamentoDetailComponent;
  let fixture: ComponentFixture<AppartamentoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartamentoDetailComponent]
    });
    fixture = TestBed.createComponent(AppartamentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

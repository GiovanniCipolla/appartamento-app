import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentoListComponent } from './appartamento-list.component';

describe('AppartamentoListComponent', () => {
  let component: AppartamentoListComponent;
  let fixture: ComponentFixture<AppartamentoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartamentoListComponent]
    });
    fixture = TestBed.createComponent(AppartamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

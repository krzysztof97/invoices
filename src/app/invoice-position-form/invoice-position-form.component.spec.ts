import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePositionFormComponent } from './invoice-position-form.component';

describe('InvoicePositionFormComponent', () => {
  let component: InvoicePositionFormComponent;
  let fixture: ComponentFixture<InvoicePositionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePositionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePositionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

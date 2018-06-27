import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CqsComponent } from './cqs.component';

describe('CqsComponent', () => {
  let component: CqsComponent;
  let fixture: ComponentFixture<CqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

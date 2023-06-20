import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyTableComponent } from './pretty-table.component';

describe('PrettyTableComponent', () => {
  let component: PrettyTableComponent;
  let fixture: ComponentFixture<PrettyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrettyTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrettyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

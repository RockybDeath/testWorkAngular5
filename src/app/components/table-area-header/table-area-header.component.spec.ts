import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAreaHeaderComponent } from './table-area-header.component';

describe('TableAreaHeaderComponent', () => {
  let component: TableAreaHeaderComponent;
  let fixture: ComponentFixture<TableAreaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAreaHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableAreaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

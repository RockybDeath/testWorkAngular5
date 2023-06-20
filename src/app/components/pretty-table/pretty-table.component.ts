import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TableRow } from '../models/table-row';
import { Table } from 'primeng/table';
import { TableDataService } from '../../services/table-data.service';
import { allColumns } from '../testData/columns';
import { Column } from '../models/column';

@Component({
  selector: 'app-pretty-table',
  templateUrl: './pretty-table.component.html',
  styleUrls: ['./pretty-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrettyTableComponent implements OnInit {
  @ViewChild('pTable') dt: Table | undefined;

  public tableData$: Observable<TableRow[]> | undefined;

  public startRowsCount = 10;
  public rowsPerPageArray = [10, 25, 50];

  public columns: Column[] = allColumns;
  public _selectedColumns: Column[] = allColumns;

  public scrollHeight = '70vh';

  public filterColumns: string[] = ['name'];

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.tableData$ = this.tableDataService.tableData$();
  }

  public clear(table: Table): void {
    table.clear();
  }

  public applyFilterGlobal($event: Event, mode: string): void {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, mode);
  }

  get selectedColumns(): Column[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: Column[]) {
    this._selectedColumns = this.columns.filter((col) => val.includes(col));
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableRow } from '../components/models/table-row';
import { tableData } from '../components/testData/data';
import { UserName } from '../components/models/user-name';

@Injectable({
  providedIn: 'root',
})
export class TableDataService implements OnDestroy {
  private tableData: BehaviorSubject<TableRow[]> = new BehaviorSubject<
    TableRow[]
  >([]);
  public tableData$(): Observable<TableRow[]> {
    return this.tableData.asObservable();
  }
  constructor() {
    const modifiedTableData: TableRow[] = tableData.reduce(
      (currentArray, nextValue) => {
        const fullName = this.getFullName(nextValue.name as UserName);
        const newValue: TableRow = { ...nextValue, name: fullName };
        currentArray.push(newValue);
        return currentArray;
      },
      [] as TableRow[]
    );
    this.tableData.next(modifiedTableData);
  }

  private getFullName(info: UserName): string {
    let result = '';
    if (info?.last) {
      result += info.last + ' ';
    }
    if (info?.first) {
      result += info.first;
    }
    return result;
  }

  ngOnDestroy(): void {
    this.tableData.next([]);
    this.tableData.complete();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableAreaComponent {}

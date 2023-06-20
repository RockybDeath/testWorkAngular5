import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAreaComponent } from './components/table-area/table-area.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'table',
  },
  {
    path: 'table',
    component: TableAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

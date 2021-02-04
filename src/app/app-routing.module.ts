import { StackchartComponent } from './stackchart/stackchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LinechartComponent },
  { path: 'piechart', component: PiechartComponent },
  { path: 'stackchart', component: StackchartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

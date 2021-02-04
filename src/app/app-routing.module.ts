import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { BargraphMultipleComponent } from './bargraph-multiple/bargraph-multiple.component';
import { BargraphSingleComponent } from './bargraph-single/bargraph-single.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { StackchartComponent } from './stackchart/stackchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'linechart', component: LinechartComponent },
  { path: 'piechart', component: PiechartComponent },
  { path: 'stackchart', component: StackchartComponent },
  { path: 'circlechart', component: CircleChartComponent },
  { path: 'bargraph-single', component: BargraphSingleComponent },
  { path: 'bargraph-multiple', component: BargraphMultipleComponent },
  { path: 'horizontal-bargraph', component: HorizontalBarGraphComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { StackchartComponent } from './stackchart/stackchart.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { BargraphSingleComponent } from './bargraph-single/bargraph-single.component';
import { BargraphMultipleComponent } from './bargraph-multiple/bargraph-multiple.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    PiechartComponent,
    StackchartComponent,
    CircleChartComponent,
    BargraphSingleComponent,
    BargraphMultipleComponent,
    HorizontalBarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

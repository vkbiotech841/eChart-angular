import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts } from 'echarts';

@Component({
  selector: 'app-bargraph-single',
  templateUrl: './bargraph-single.component.html',
  styleUrls: ['./bargraph-single.component.scss']
})
export class BargraphSingleComponent implements OnInit {

  private myChart!: ECharts;

  constructor() { }

  ngOnInit(): void {
    this.drawASingleBarGraph();
  }


  public drawASingleBarGraph(): void {
    this.myChart = echarts.init((document.getElementById('barChartSingle')) as any);

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    };

    this.myChart.setOption(option);

  }

}

import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bargraph-multiple',
  templateUrl: './bargraph-multiple.component.html',
  styleUrls: ['./bargraph-multiple.component.scss']
})
export class BargraphMultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.drawAMultipleBargraph();
  }

  private myChart: any = null;

  drawAMultipleBargraph() {
    this.myChart = echarts.init((document.getElementById('barChartMultiple')) as any);

    const option = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
          { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
          { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
          { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
      ]
    };

    this.myChart.setOption(option);

  }

}

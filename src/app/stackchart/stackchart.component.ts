import { Component, ElementRef, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts } from 'echarts';

@Component({
  selector: 'app-stackchart',
  templateUrl: './stackchart.component.html',
  styleUrls: ['./stackchart.component.scss']
})
export class StackchartComponent implements OnInit {

  private stackchart!: ECharts;

  // data Structure for Series
  data: any[] = [{
    legend: "Marketing",
    dataPoints: [220, 182, 191, 234, 290, 330, 310]
  }, {
    legend: "Sales",
    dataPoints: [150, 232, 201, 154, 190, 330, 410]
  }, {
    legend: "HumanResource",
    dataPoints: [170, 132, 291, 254, 145, 390, 610]
  }];


  series: any[] = [];
  legends: any[] = [];

  constructor(
    private elm: ElementRef
  ) { }


  ngOnInit() {
    this.drawStackChart();

  }

  public drawStackChart(): void {
    this.stackchart = echarts.init($(this.elm.nativeElement).find('#mGraph_sale')[0]);

    this.data.forEach(x => {
      this.series.push({
        name: x.legend,
        type: 'line',
        stack: 'Total Amount',
        areaStyle: { normal: {} },
        data: x.dataPoints
      })

      this.legends.push(x.legend)

    })

    this.stackchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: { backgroundColor: '#6a7985' }
        }
      },
      //    title: {
      //     left: 'center',
      //     text: 'Stack Chart',
      // },
      legend: { data: this.legends },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.series,
    },

    )
  }

}

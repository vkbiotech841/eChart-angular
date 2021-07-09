import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ECharts } from 'echarts';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {
  private myChart!: ECharts;

  ngOnInit() {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.myChart = echarts.init((document.getElementById('pipe')) as any);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        //selectedMode: false,
        orient: 'vertical',
        x: 'left',
        data: ['elem1', 'elem2', 'elem3', 'elem4', 'elem5']
      },
      series: [
        {
          name: 'NOMBRE',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: 'elem1' },
            { value: 310, name: 'elem2' },
            { value: 234, name: 'elem3' },
            { value: 135, name: 'elem4' },
            { value: 1548, name: 'elem5' }
          ]
        }
      ]
    };
    this.myChart.setOption(option);
  }

  public OnElem1Click(): void {
    console.log("OnElem1Click");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  };

  public OnElem1Mouseover(): void {
    console.log("OnElem1Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  };

  public OnElem1Mouseout(): void {
    console.log("OnElem1Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1
    });
  };

  public OnElem2Mouseover(): void {
    console.log("OnElem2Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 2
    });
  };

  public OnElem2Mouseout(): void {
    console.log("OnElem2Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 2
    });
  };

}

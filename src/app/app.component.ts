import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eChart-angular';

  ngOnInit() {
    this.InitPipe();
  }

  private myChart: any = null;

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

    /*
    this.myChart.on('legendselectchanged', function(params) {
        console.log("legendselectchanged", params);
        var name = params.name;
        var slectedObject = {[name]:true};
        console.log("slectedObject", slectedObject);
        
        let option = {
            legend: {
                selected : slectedObject
            }
        }
        this.myChart.setOption(option);
    })
    */

  }

  OnElem1Click() {
    console.log("OnElem1Click");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseover() {
    console.log("OnElem1Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem1Mouseout() {
    console.log("OnElem1Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1
    });
  }

  OnElem2Mouseover() {
    console.log("OnElem2Mouseover");
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 2
    });
  }

  OnElem2Mouseout() {
    console.log("OnElem2Mouseout");
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 2
    });
  }
}


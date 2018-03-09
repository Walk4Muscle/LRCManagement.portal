import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'ratio-trend-eng-demo',
    providers: [PercentPipe],
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class RatioTrendEngineerComponent implements OnInit {

    chart: any;
    constructor(
        private percentPipe: PercentPipe
    ) {
        this.chart = {
            type: 'line',
            data: {
                datasets: [{
                    label: 'total',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.red,
                    borderColor: Constants.color.red,
                },  {
                    label: 'WenXiang',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.redA5,
                    borderColor: Constants.color.redA5,
                }, {
                    label: 'Johnny',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.blueA5,
                    borderColor: Constants.color.blueA5,
                }, {
                    label: 'Robin',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.greenA5,
                    borderColor: Constants.color.greenA5,
                }, {
                    label: 'Mike',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.indigoA5,
                    borderColor: Constants.color.indigoA5,
                }, {
                    label: 'Will',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.orangeA5,
                    borderColor: Constants.color.orangeA5,
                }, {
                    label: 'Casey',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.limeA5,
                    borderColor: Constants.color.limeA5,
                }, {
                    label: 'Daniel',
                    data: Demo.generateRandomDataPercent(6),
                    fill: false,
                    backgroundColor: Constants.color.amberA5,
                    borderColor: Constants.color.amberA5,
                }
                ],
                labels: Demo.labels
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Close Ratio Engineer trend Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (t, d) {
                            const ret = d.datasets[t.datasetIndex].label + ' ' + percentPipe.transform(t.yLabel.toString(), '.3');
                            return ret;
                            // if (t.datasetIndex === (0|1)) {
                            //     return percentPipe.transform(t.yLabel.toString(),'.3')
                            // }
                        }
                    }
                },
            }
        };
    }

    ngOnInit() { }
}
import { Component, OnInit } from '@angular/core';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'volume-trend-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class VolumeTrendComponent implements OnInit {

    chart = {
        type: 'bar',
        data: {
            datasets: [{
                label: 'total',
                data: Demo.generateRandomData(6, 200),
                type: 'line',
                fill: false,
                backgroundColor: Constants.color.red,
                borderColor: Constants.color.red,
            }, {
                label: 'A',
                data: Demo.generateRandomData(6),
                backgroundColor: Constants.color.redA5,
                borderColor: Constants.color.redA5,
            }, {
                label: 'B',
                data: Demo.generateRandomData(6),
                backgroundColor: Constants.color.blueA5,
                borderColor: Constants.color.blueA5,
            }, {
                label: 'C',
                data: Demo.generateRandomData(6),
                backgroundColor: Constants.color.greenA5,
                borderColor: Constants.color.greenA5,
            }, {
                label: 'D',
                data: Demo.generateRandomData(6),
                backgroundColor: Constants.color.yellowA5,
                borderColor: Constants.color.yellowA5,
            },
            ],
            labels: Demo.labels
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Volume trend Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (t, d) {
                        const ret = d.datasets[t.datasetIndex].label + ' ' + t.yLabel.toString();
                        return ret;
                        // if (t.datasetIndex === (0|1)) {
                        //     return percentPipe.transform(t.yLabel.toString(),'.3')
                        // }
                    }
                }
            },
        }
    };

    constructor() { }

    ngOnInit() { }
}
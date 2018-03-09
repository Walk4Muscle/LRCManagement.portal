import { Component, OnInit } from '@angular/core';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'labor-trend-engineer-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class LaborTrendEngineerComponent implements OnInit {

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
                label: 'WenXiang',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.redA5,
                borderColor: Constants.color.redA5,
            }, {
                label: 'Johnny',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.blueA5,
                borderColor: Constants.color.blueA5,
            }, {
                label: 'Robin',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.greenA5,
                borderColor: Constants.color.greenA5,
            }, {
                label: 'Mike',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.indigoA5,
                borderColor: Constants.color.indigoA5,
            }, {
                label: 'Will',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.orangeA5,
                borderColor: Constants.color.orangeA5,
            }, {
                label: 'Casey',
                data: Demo.generateRandomData(6, 200),
                backgroundColor: Constants.color.limeA5,
                borderColor: Constants.color.limeA5,
            }, {
                label: 'Daniel',
                data: Demo.generateRandomData(6, 200),
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
                text: 'Engineer Case MPI trend Chart'
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
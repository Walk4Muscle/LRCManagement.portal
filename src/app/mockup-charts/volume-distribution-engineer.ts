import { Component, OnInit } from '@angular/core';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'volume-distribution-eng-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class VolumeDistributionEngComponent implements OnInit {

    chart = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: Demo.generateRandomData(7),
                backgroundColor: [
                    Constants.color.red,
                    Constants.color.blue,
                    Constants.color.green,
                    Constants.color.yellow,
                    Constants.color.redA5,
                    Constants.color.blueA5,
                    Constants.color.indigoA5,
                ],
            }
            ],
            labels: ['WenXiang', 'Johnny', 'Robin', 'Mike', 'Will', 'Casey', 'Daniel']
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Volume Engineer Distribution Chart'
            },
        }
    };

    constructor() { }

    ngOnInit() { }
}
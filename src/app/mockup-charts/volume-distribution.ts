import { Component, OnInit } from '@angular/core';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'volume-distribution-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class VolumeDistributionComponent implements OnInit {

    chart = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: Demo.generateRandomData(4),
                backgroundColor: [
                    Constants.color.red,
                    Constants.color.blue,
                    Constants.color.green,
                    Constants.color.yellow,
                ],
            }
            ],
            labels: ['A', 'B', 'C', 'D']
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Volume Distribution Chart'
            },
        }
    };

    constructor() { }

    ngOnInit() { }
}
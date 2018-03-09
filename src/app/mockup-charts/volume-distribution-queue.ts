import { Component, OnInit } from '@angular/core';
import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'volume-distribution-queue-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class VolumeDistributionQueueComponent implements OnInit {

    chart = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: Demo.generateRandomData(4),
                backgroundColor: [
                    Constants.color.red,
                    Constants.color.blue,
                    Constants.color.green,
                    Constants.color.yellow
                ],
            }
            ],
            labels: ['IIS', 'IE', 'Driver', 'Other']
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Volume Queue Distribution Chart'
            },
        }
    };

    constructor() { }

    ngOnInit() { }
}
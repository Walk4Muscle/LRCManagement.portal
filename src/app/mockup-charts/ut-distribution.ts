import { Component, OnInit } from '@angular/core';
import * as moment from 'moment/moment';

import { Constants } from '../app.config';
import { Demo } from '../demo.utils';

@Component({
    selector: 'ut-distribution-demo',
    template: `<chart [type]="chart.type" [data]="chart.data" [options]="chart.options" style="position: relative; height:300px"></chart>`
})

export class UTDistributionComponent implements OnInit {

    chart = {
        type: 'line',
        data: {
            datasets: [{
                label: 'A',
                data: Demo.generateRandomData(50),
                fill: false,
                showLine: false,
                backgroundColor: Constants.color.redA5,
                borderColor: Constants.color.redA5,
            }, {
                label: 'B',
                data: Demo.generateRandomData(50),
                fill: false,
                showLine: false,
                backgroundColor: Constants.color.blueA5,
                borderColor: Constants.color.blueA5,
            }, {
                label: 'C',
                data: Demo.generateRandomData(50),
                fill: false,
                showLine: false,
                backgroundColor: Constants.color.greenA5,
                borderColor: Constants.color.greenA5,
            }, {
                label: 'D',
                data: Demo.generateRandomData(50),
                fill: false,
                showLine: false,
                backgroundColor: Constants.color.yellowA5,
                borderColor: Constants.color.yellowA5,
            },
            ],
            labels: Demo.generateRandomTime(200)
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'UT Distribution Chart'
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        // unit: false,
                        round: 'minute',
                        minUnit: 'hour',
                        tooltipFormat: 'h:mm:ss A',
                        displayFormats: {
                            hour: 'h:mm A'
                        }
                    }
                }],

            }
        }
    };

    constructor() { }

    ngOnInit() { 
        console.log(this.chart)
    }
}
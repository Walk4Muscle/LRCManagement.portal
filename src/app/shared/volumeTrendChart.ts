import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../app.config';
import { ChartDataService } from '../services/chartdata.service';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../services/app.globals';
import * as _ from 'lodash';
import 'chartjs-plugin-datalabels';

@Component({
    selector: 'volume-trend-chart',
    template: `<chart [type]="chart?.type" [data]="chart?.data" [options]="chart?.options" style="position: relative; height:300px"></chart>`
})


// tslint:disable-next-line:component-class-suffix
export class VolumeTrendChart implements OnInit {
    @Input('by') by: string;
    @Input() type: string;
    @Input() title: string;
    chart: any;
    // chart = {
    //     type: 'bar',
    //     data: {
    //         datasets: [{
    //             label: 'total',
    //             data: Demo.generateRandomData(6, 200),
    //             type: 'line',
    //             fill: false,
    //             backgroundColor: Constants.color.red,
    //             borderColor: Constants.color.red,
    //         }, {
    //             label: 'IIS',
    //             data: Demo.generateRandomData(6),
    //             backgroundColor: Constants.color.redA5,
    //             borderColor: Constants.color.redA5,
    //         }, {
    //             label: 'IE',
    //             data: Demo.generateRandomData(6),
    //             backgroundColor: Constants.color.blueA5,
    //             borderColor: Constants.color.blueA5,
    //         }, {
    //             label: 'Driver',
    //             data: Demo.generateRandomData(6),
    //             backgroundColor: Constants.color.greenA5,
    //             borderColor: Constants.color.greenA5,
    //         }, {
    //             label: 'Other Dev',
    //             data: Demo.generateRandomData(6),
    //             backgroundColor: Constants.color.yellowA5,
    //             borderColor: Constants.color.yellowA5,
    //         },
    //         ],
    //         labels: Demo.labels
    //     },
    //     options: {
    //         maintainAspectRatio: false,
    //         title: {
    //             display: true,
    //             text: 'Queue Volume trend Chart'
    //         },
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false,
    //             callbacks: {
    //                 label: function (t, d) {
    //                     const ret = d.datasets[t.datasetIndex].label + ' ' + t.yLabel.toString();
    //                     return ret;
    //                     // if (t.datasetIndex === (0|1)) {
    //                     //     return percentPipe.transform(t.yLabel.toString(),'.3')
    //                     // }
    //                 }
    //             }
    //         },
    //     }
    // };

    constructor(
        private chartdataService: ChartDataService,
        private globals: Globals,
    ) {

    }

    ngOnInit() {
        this.by = this.by ? this.by : 'se';
        this.type = this.type ? this.type : 'idle';
        this.getData().subscribe(data => {
            const length = _.values(data).length;
            const colors = _.range(length).map((i) => {
                return _.values(Constants.color)[i % _.values(Constants.color).length];
            });
            const colorA5s = _.range(length).map((i) => {
                return _.values(Constants.colorA5)[i % _.values(Constants.colorA5).length];
            });
            const datasets = [{
                label: '# of volume',
                data: Object.values(data),
                backgroundColor: colorA5s,
                borderColor: colors,
                datalabels: {
                    // anchor: 'start',
                    // align: 'start',
                }
            }];
            this.chart = {
                type: 'bar',
                data: {
                    datasets: datasets,
                    labels: Object.keys(data)
                },
                options: {
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: this.title
                    },
                    plugins: {
                        datalabels: {
                            color: 'black',
                            font: {
                                weight: 'bold'
                            },
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
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
        });
    }

    getData(): Observable<any> {
        // this.globals.USER.alias = 'wenw';
        return this.chartdataService.getVolumeChartData(this.globals.USER.alias, this.type, this.by);
    }
}
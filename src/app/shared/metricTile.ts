import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../services/app.globals';
import { MetricTableDataService } from '../services/metrictabledata.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'metric-tile',
    styleUrls: ['./shared.component.scss'],
    template: `<span>{{number}}</span>`
})
// tslint:disable-next-line:component-class-suffix
export class MetricTile implements OnInit {
    @Input() category: string;
    @Input() type: string;
    number = 0;

    constructor(
        private globals: Globals,
        private metricTableDataService: MetricTableDataService
    ) {

    }
    ngOnInit(): void {
        this.getData().subscribe(data => {
            this.number = data;
        });
    }

    getData(): Observable<any> {
        // this.globals.USER.alias = 'wenw';
        return this.metricTableDataService.get(this.globals.USER.alias, this.type, this.category);
    }
}
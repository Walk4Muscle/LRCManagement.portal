import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { Http, Response } from '@angular/http';


@Injectable()
export class MetricTableDataService extends AppService {

    constructor(private _http: Http) {
        super();
    }

    public get(user?: string, type = 'idle', category = 'total'): Observable<any> {
        const url = `${this.API_URL}MetricsTable${type}case/${user}/${category}`;
        return this._http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

}

import { Component, Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { Http, Response } from '@angular/http';


@Injectable()
export class ChartDataService extends AppService {

    constructor(private _http: Http) {
        super();
    }

    public getVolumeChartData(user?: string, type = 'idle', by = 'se'): Observable<any> {
        const url = `${this.API_URL}${type}chart${by}/${user}`;
        return this._http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
        // const data = {
        //     'ALIWANG': 10,
        //     'BREADH': 11,
        //     'BRUCEC': 7,
        //     'CHIHSHEN': 14,
        //     'DANILAI': 19,
        //     'FEIWA': 2,
        //     'QICHE': 6,
        //     'RYANCHIU': 9,
        //     'V-JIANCS': 13,
        //     'V-SHENYA': 1,
        //     'WENCH': 4,
        //     'WENW': 2,
        //     'WSHAO': 2,
        //     'XINGNLU': 7,
        //     'YEJXU': 4
        // };
        // return Observable.of(data);
    }

    public getDataByPro(user?: string, type = 'idle'): Observable<any> {
        const data = {
            'Surface with Windows': 1,
            'Visual Studio': 32,
            'Win32 Dev Tools': 2,
            'Windows 10': 3,
            'Windows DDK': 14,
            'Windows NT': 8
        };
        return Observable.of(data);
    }
}

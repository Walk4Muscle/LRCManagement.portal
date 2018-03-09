import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Constants } from '../app.config';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {
    protected API_URL = environment.apiUrl;
    protected api_uri: string;
    constructor(path?: string) {
        // this.api_uri = API_URL + path;
    }
    protected handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}

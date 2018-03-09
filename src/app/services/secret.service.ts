import { Injectable } from '@angular/core';

// Application specific configuration 
@Injectable()
export class SecretService {
    public get adalConfig(): any {
        return {
            tenant: 'microsoft.onmicrosoft.com',
            clientId: '229fa9b7-08ac-45d1-89c1-407220331133',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
        };
    }
}
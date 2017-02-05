import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  clientId = '2f98992c40b8edf17423d93bda2e04ab';

  constructor(private http: Http) { }

  get(url, attachClientId?) {
    let myUrl;
    attachClientId ? myUrl = this.prepareUrl(url) : myUrl = url;
    return this.http.get(myUrl);
  }

  prepareUrl(url){
    return `${url}?client_id=${this.clientId}`;
  }
}

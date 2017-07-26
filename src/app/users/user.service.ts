import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Seller} from './seller';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private userUrl = '//localhost/valia-api/public/api/seller';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  createSeller(merchant: Seller): Promise<any> {
    return this.http.post(this.userUrl, JSON.stringify(merchant), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}

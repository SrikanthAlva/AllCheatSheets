import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserSearchService{

    constructor(private http: Http){}

    getAllUser():Observable<User[]>{
      return this.http.get(`https://api.github.com/users`)
        .map(response => response.json());
    }

}
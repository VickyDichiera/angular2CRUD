import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ContactBookService {
  constructor(private http: Http) { }
  private contactsUrl = 'api/contacts';

  getContacts(): Observable<any[]> {

    return this.http.get(this.contactsUrl)
      .map(response => response.json().data)
      .catch(error => Observable.throw(error.json().error || 'Server error'));
  }
}

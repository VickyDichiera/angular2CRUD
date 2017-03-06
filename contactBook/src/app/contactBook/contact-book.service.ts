import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
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
  getContact(contactId): any{
    const url = `${this.contactsUrl}/${contactId}`;
    return this.http.get(url)
      .map(response => response.json().data)
      .catch(error => Observable.throw(error.json() || 'Server error'));
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  setFavorite(contact: any): any{
    contact.favorite = !contact.favorite;
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.put(url, JSON.stringify(contact), {headers: this.headers})
      .map(response => response)
      .catch(error => Observable.throw(error.json() || 'Server error'));
  }
}

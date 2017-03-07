import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {id:1, phone: 11, name: 'Mr. Nice', favorite:false, email: 'contact@mail.com'},
      {id:2, phone: 12, name: 'Narco', favorite:false, email: 'contact@mail.com'},
      {id:3, phone: 13, name: 'Bombasto', favorite:false, email: 'contact@mail.com'},
      {id:4, phone: 14, name: 'Celeritas', favorite:false, email: 'contact@mail.com'},
      {id:5, phone: 15, name: 'Magneta', favorite:false, email: 'contact@mail.com'},
      {id:6, phone: 16, name: 'RubberMan', favorite:false, email: 'contact@mail.com'},
      {id:7, phone: 17, name: 'Dynama', favorite:false, email: 'contact@mail.com'},
      {id:8, phone: 18, name: 'Dr IQ', favorite:false, email: 'contact@mail.com'},
      {id:9, phone: 19, name: 'Magma', favorite:false, email: 'contact@mail.com'},
      {id:10, phone: 20, name: 'Tornado', favorite:false, email: 'contact@mail.com'}
    ];
    return {contacts};
  }
}

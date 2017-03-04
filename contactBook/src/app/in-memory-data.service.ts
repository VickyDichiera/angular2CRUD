import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {id:1, phone: 11, name: 'Mr. Nice', favorite:false},
      {id:2, phone: 12, name: 'Narco', favorite:false},
      {id:3, phone: 13, name: 'Bombasto', favorite:false},
      {id:4, phone: 14, name: 'Celeritas', favorite:false},
      {id:5, phone: 15, name: 'Magneta', favorite:false},
      {id:6, phone: 16, name: 'RubberMan', favorite:false},
      {id:7, phone: 17, name: 'Dynama', favorite:false},
      {id:8, phone: 18, name: 'Dr IQ', favorite:false},
      {id:9, phone: 19, name: 'Magma', favorite:false},
      {id:10, phone: 20, name: 'Tornado', favorite:false}
    ];
    return {contacts};
  }
}

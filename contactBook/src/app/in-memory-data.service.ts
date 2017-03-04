import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let contacts = [
      {phone: 11, name: 'Mr. Nice', favorite:false},
      {phone: 12, name: 'Narco', favorite:false},
      {phone: 13, name: 'Bombasto', favorite:false},
      {phone: 14, name: 'Celeritas', favorite:false},
      {phone: 15, name: 'Magneta', favorite:false},
      {phone: 16, name: 'RubberMan', favorite:false},
      {phone: 17, name: 'Dynama', favorite:false},
      {phone: 18, name: 'Dr IQ', favorite:false},
      {phone: 19, name: 'Magma', favorite:false},
      {phone: 20, name: 'Tornado', favorite:false}
    ];
    return {contacts};
  }
}

import { Component, OnInit }  from '@angular/core';
import { ContactBookService } from './contact-book.service';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.components.scss'],
  providers: [ContactBookService],
})
export class ContactBookComponent implements OnInit {
  contacts: any[];
  title: string;

  constructor(
    private contactBookService: ContactBookService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.title = 'My Contact Book!';
    this.contactBookService.getContacts()
      .subscribe(
        contacts => {this.contacts = contacts},
        error => console.log(error)
        );
  }

  toggleFavorite(contact){

  }
}

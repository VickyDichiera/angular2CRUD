import { Component, OnInit }  from '@angular/core';
import { ContactBookService } from '../contact-book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder }
    from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'contact-edition',
  templateUrl: './contact-edition.component.html',
  styleUrls: ['./contact-edition.components.scss'],
  providers: [ContactBookService],
})
export class ContactEditionComponent implements OnInit {
  contact: any;
  title: string;
  contactForm: FormGroup;

  constructor(
    private contactBookService: ContactBookService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void{
    this.title = 'Edit Page!';
    this.route.params
      .switchMap((params: Params) => this.contactBookService.getContact(params['id']))
        .subscribe(
          contact => {this.contact = contact; this.initializeForm()},
          error => console.log(error)
        );
  }
  initializeForm(){
    this.contactForm = this.formBuilder.group({
            "name": [this.contact.name, Validators.required],
            "email": [this.contact.email, Validators.required],
            "phone": [this.contact.phone, Validators.required]
        });
  }
  onSubmit() {
    let updatedContact = this.contactForm.value;
    updatedContact['id'] = this.contact.id;
    this.contactBookService.updateContact(updatedContact)
      .subscribe(
        contact => {
          console.log(contact);
        },
        error => console.log(error)
        );
  }
  toggleFavorite(contact){
    this.contactBookService.setFavorite(contact)
      .subscribe(
        contact => {
          console.log(contact);
        },
        error => console.log(error)
        );
  }
/*
  getContacts(){
    this.contactBookService.getContacts()
      .subscribe(
        contacts => {this.contacts = contacts},
        error => console.log(error)
        );
  }
  toggleFavorite(contact){
    this.contactBookService.setFavorite(contact)
      .subscribe(
        contact => {
          this.getContacts();
          console.log(contact);
        },
        error => console.log(error)
        );
  }*/
}

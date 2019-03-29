import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  providers: [PeopleService]
})
export class PeopleListComponent implements OnInit {

  constructor(private service: PeopleService) { 

  }
  people: Person[];
  ngOnInit() {
    this.service.people.subscribe(people => this.people = people);
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { UserSearchService } from './user-search.service';
import { User } from './user';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [ './user-search.component.css' ],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  filterUsers;
  private searchTerms = new Subject<string>();
  constructor(
    private userSearchService: UserSearchService) {}
  
  ngOnInit(): void {

    let self = this;
    this.userSearchService.getAllUser().subscribe(data =>{ 
      console.log(data);
      self.users = data; 
    })
  }

    search(term: string){
      this.filterUsers = this.users;
      if(term)
        this.filterUsers  = this.users.filter(strg => strg.login.includes(term));
      else
      this.filterUsers = null;
    }

}

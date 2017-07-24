import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {User} from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../../assets/css/material-kit.css']
})
export class RegistrationComponent implements OnInit {
  private pass_match: boolean;
  // model = new User();

  constructor(private title: Title) {
    this.pass_match = false;
  }

  ngOnInit(): void {
    this.title.setTitle('Register');
  }

  checkPassword(pass1: string, pass2: string) {
    if (pass1 === pass2) {
      this.pass_match = true;
    } else {
      this.pass_match = false;
    }
  }

}

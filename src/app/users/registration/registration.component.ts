import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Seller} from './seller';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../../assets/css/material-kit.css']
})
export class RegistrationComponent implements OnInit {
  private pass_match: boolean;
  seller = new Seller('Eric', 'Murimi Njue', 'emurinyo@gmail.com', '0718513948', 'pass123', 'pass123', 'Ricoz Fashion', true);

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

import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Seller} from './seller';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    '../../../assets/css/material-kit.css',
    './registration.component.css'
  ]
})
export class RegistrationComponent implements OnInit {
  private submitted: boolean;
  seller = new Seller('', '', '', '', '', '', '', false);

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Register');
  }

  onSubmit(): void {

  }
}

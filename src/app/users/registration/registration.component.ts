import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Seller} from '../seller';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [
    '../../../assets/css/material-kit.css',
    './registration.component.css'
  ],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {
  private submitted: boolean;
  private api_errors: string[];
  seller = new Seller('Eric', 'Murimi Njue', 'emurinyo@gmail.com', '0718513948', 'pass123', 'pass123', 'Lara Fashions', false);

  constructor(
    private title: Title,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Register');
  }

  onSubmit(): void {
    this.userService.createSeller(this.seller)
      .then(function (data) {
        if (data.success) {
          
        } else {
          // loop and show server side error messages
        }
      });
  }
}

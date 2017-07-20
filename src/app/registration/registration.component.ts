import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../assets/css/material-kit.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Register');
  }

}

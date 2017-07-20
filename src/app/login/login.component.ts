import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/material-kit.css']
})
export class LoginComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Login');
  }

}

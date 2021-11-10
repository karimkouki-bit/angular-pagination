import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: number = 1;

  List = [{'id': 1, 'firstName': 'Brnaby', 'email': 'karim123@gmail.com', 'city':'sousse'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'},
          {'id': 2, 'firstName': 'aymen', 'email': 'aymen123@gmail.com', 'city':'Mahdia'}]

  constructor() { }

  ngOnInit(): void {
  }

}

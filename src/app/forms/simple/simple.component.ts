import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

name = new FormControl(' ')
phone = new FormControl(' ')
myArray:{}[] = [];

  constructor() { }

  ngOnInit() {
  }
  addName() {
    this.myArray.push({name:this.name.value,phone:this.phone.value});
    console.log(this.myArray);
    this.name.setValue('')
    this.phone.setValue('')
  }

}

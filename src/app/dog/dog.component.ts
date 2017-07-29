import { Component, OnInit } from '@angular/core';

import { Dog } from './dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogs: Dog[] = [
    {
      name: "Frodo",
      age: 5,
      bark: "woof!",
      representativePhoto: "https://s-media-cache-ak0.pinimg.com/736x/82/20/d7/8220d70f4f6d82823a93a1b7e32ca5be--chip-dips-kettle-corn.jpg"
    },
    {
      name: "Simon",
      age: 5,
      bark: "woof!",
      representativePhoto: "https://s-media-cache-ak0.pinimg.com/736x/82/20/d7/8220d70f4f6d82823a93a1b7e32ca5be--chip-dips-kettle-corn.jpg"
    },
    {
      name: "Hugo",
      age: 5,
      bark: "woof!",
      representativePhoto: "https://s-media-cache-ak0.pinimg.com/736x/82/20/d7/8220d70f4f6d82823a93a1b7e32ca5be--chip-dips-kettle-corn.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
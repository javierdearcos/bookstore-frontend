import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  numberOfBooks: number = 100;
  books = [
    {
      id: 1,
      title: "Java: The Complete Reference, Eleventh Edition",
      description: "Fully updated for Java SE 11, Java: The Complete Reference, Eleventh Edition explains how to develop, compile, debug, and run Java programs. Best-selling programming author Herb Schildt covers the entire Java language, including its syntax, keywords, and fundamental programming principles",
      isbn: "123-45678-1234567890",
      unitCost: 35.62,
      numberOfPages: 1248,
      language: "English",
      imageUrl: "https://m.media-amazon.com/images/I/51IpgznsrtL._SX260_.jpg"
    }, {
      id: 2,
      title: "Easy Learning Javascript",
      description: "JavaScript is powerfull web programming language. Javascript easy to learn and fun to use! This book brings JavaScript to life and quirky, full-color illustrations keep things on the lighter side. you’ll learn how to organize Object Oriented Programming and reuse your code with class functions and method, use control structures like loops and conditional statements, draw shapes and patterns with JavaScript’s and Create games, animations, and graphic with Canvas",
      isbn: "123-45678-1234567890",
      unitCost: 5.49,
      numberOfPages: 204,
      language: "English",
      imageUrl: "https://m.media-amazon.com/images/I/41UwLrimblL._SX260_.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

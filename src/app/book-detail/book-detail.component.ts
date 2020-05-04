import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-detail',
  template: `
  <h2>Detail of a book</h2>
  <form>
      <div class="form-group row">
          <label class="col-2 col-form-label">Title</label>
          <div class="col-10">
              <input class="form-control" type="text" value="{{book.title}}" name="title" readonly>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-2 col-form-label">Description</label>
          <div class="col-10">
              <textarea class="form-control" rows="3" name="description" readonly>{{book.description}}</textarea>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-2 col-form-label">Unit cost</label>
          <div class="col-10">
              <div class="input-group">
                  <input class="form-control" type="number" value="{{book.unitCost}}" name="unitCost" readonly>
                  <span class="input-group-addon">$</span>
              </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-2 col-form-label">ISBN</label>
          <div class="col-10">
              <input class="form-control" type="text" value="{{book.isbn}}" name="isbn" readonly>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-2 col-form-label">Number of pages</label>
          <div class="col-10">
              <input class="form-control" type="number" value="{{book.numberOfPages}}" name="nbOfPages" readonly>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-2 col-form-label">Language</label>
          <div class="col-10">
              <input class="form-control" type="text" value="{{book.language}}" name="language" readonly>
          </div>
      </div>
  
      <button type="submit" class="btn btn-primary">Delete</button>
      <a class="btn btn-secondary" href="" role="button">Back</a>
  </form>
  `,
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {

  book = {
    title: "Easy Learning Javascript",
    description: "JavaScript is powerfull web programming language. Javascript easy to learn and fun to use! This book brings JavaScript to life and quirky, full-color illustrations keep things on the lighter side. you’ll learn how to organize Object Oriented Programming and reuse your code with class functions and method, use control structures like loops and conditional statements, draw shapes and patterns with JavaScript’s and Create games, animations, and graphic with Canvas",
    isbn: "123-45678-1234567890",
    unitCost: 5.49,
    numberOfPages: 204,
    language: "English",
    imageUrl: "https://m.media-amazon.com/images/I/41UwLrimblL._SX260_.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}

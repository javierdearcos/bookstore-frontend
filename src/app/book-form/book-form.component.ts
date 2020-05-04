import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  template: `
    <h2>Create a new book</h2>
    <form>
      <div class="form-group row">
        <label class="col-2 col-form-label">Title</label>
        <div class="col-10">
          <input class="form-control" type="text" [(ngModel)]="book.title" name="title">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Description</label>
        <div class="col-10">
          <textarea class="form-control" rows="3" [(ngModel)]="book.description" name="description"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Unit cost</label>
        <div class="col-10">
        <div class="input-group">
          <input class="form-control" type="number" [(ngModel)]="book.unitCost" name="unitCost">
            <span class="input-group-addon">$</span>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Number of pages</label>
        <div class="col-10">
          <input class="form-control" type="number" [(ngModel)]="book.numberOfPages" name="nbOfPages">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Image URL</label>
        <div class="col-10">
          <input class="form-control" type="url" [(ngModel)]="book.imageUrl" name="imageUrl">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-2 col-form-label">Language</label>
        <div class="col-10">
          <select class="form-control" [(ngModel)]="book.language" name="language">
            <option value="">Select</option>
            <option value="0">ENGLISH</option>
            <option value="1">FRENCH</option>
            <option value="2">SPANISH</option>
            <option value="3">PORTUGUESE</option>
            <option value="4">ITALIAN</option>
            <option value="5">FINISH</option>
            <option value="6">GERMAN</option>
            <option value="7">DUTCH</option>
            <option value="8">RUSSIAN</option>
          </select>
        </div>
      </div>
    
      <button type="submit" class="btn btn-primary">Create</button>
      <a class="btn btn-secondary" href="" role="button">Cancel</a>
    </form>
  `,
  styles: [
  ]
})
export class BookFormComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bs-book-detail',
    templateUrl: './book-detail.component.html',
    styles: [
    ]
})
export class BookDetailComponent implements OnInit {

    private router: Router;

    book = {
        title: "Easy Learning Javascript",
        description: "JavaScript is powerfull web programming language. Javascript easy to learn and fun to use! This book brings JavaScript to life and quirky, full-color illustrations keep things on the lighter side. you’ll learn how to organize Object Oriented Programming and reuse your code with class functions and method, use control structures like loops and conditional statements, draw shapes and patterns with JavaScript’s and Create games, animations, and graphic with Canvas",
        isbn: "123-45678-1234567890",
        unitCost: 5.49,
        numberOfPages: 204,
        language: "English",
        imageUrl: "https://m.media-amazon.com/images/I/41UwLrimblL._SX260_.jpg"
    };

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit(): void {
    }

    delete(): void {
        // TODO: Call API to delete book
        this.router.navigate(['/home']);
    }

}

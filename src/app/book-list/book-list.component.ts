import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../service';

@Component({
    selector: 'bs-book-list',
    templateUrl: './book-list.component.html',
    styles: [
    ]
})
export class BookListComponent implements OnInit {

    numberOfBooks: number;
    books: Book[];

    constructor(private bookService: BookService) {
    }

    ngOnInit(): void {
      this.bookService.countBooks().subscribe(numberOfBooks => this.numberOfBooks = numberOfBooks);
      this.bookService.getBooks().subscribe(books => this.books = books);
    }

}

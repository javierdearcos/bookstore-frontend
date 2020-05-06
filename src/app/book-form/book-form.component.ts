import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookService } from '../service';
import { finalize } from 'rxjs/operators';
import { BookImpl } from '../model/book';

@Component({
    selector: 'bs-book-form',
    templateUrl: './book-form.component.html',
    styles: [
    ]
})
export class BookFormComponent implements OnInit {

    book: Book = new BookImpl();

    constructor(private bookService: BookService, private router: Router) {
    }

    ngOnInit(): void {
    }

    create(): void {
      this.bookService.createBook(this.book)
        .pipe(finalize(() => this.router.navigate(['/home'])))
        .subscribe();
    }

}

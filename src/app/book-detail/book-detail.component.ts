import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize, map, switchMap } from 'rxjs/operators';

import { Book, BookService } from '../service'

@Component({
    selector: 'bs-book-detail',
    templateUrl: './book-detail.component.html',
    styles: [
    ]
})
export class BookDetailComponent implements OnInit {

    book: Book;

    constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params
            .pipe(map(params => params["bookId"]))
            .pipe(switchMap((bookId: number) => this.bookService.getBook(bookId)))
            .subscribe(book => this.book = book);
    }

    delete(): void {
        this.bookService.deleteBook(this.book.id)
            .pipe(finalize(() => this.router.navigate(['/home'])))
            .subscribe();
    }

}

import { Component } from '@angular/core';

@Component({
  selector: 'bs-root',
  template: `
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">{{title}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bookstoreNavbar" aria-controls="bookstoreNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="bookstoreNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create</a>
        </li>
      </ul>
    </div>
  </nav>

  <main role="main">

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Welcome to our new bookstore!</h1>
        <p>This should be a description of the bookstore.</p>
      </div>
    </div>

    <div class="container">
      <bs-book-detail></bs-book-detail>
      <bs-book-form></bs-book-form>
      <bs-book-list></bs-book-list>
    </div>

    <hr>
  </main>

  <footer class="container">
    <p>Made with passion by Javier de Arcos</p>
  </footer>

  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Bookstore';
}

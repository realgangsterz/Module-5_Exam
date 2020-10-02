import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {IBook} from '../../interface/ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  listBook: IBook[] = [];
  public stt: number;
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook(): void {
    this.bookService.getAll().subscribe(listBook => {
      this.listBook = listBook;
      this.stt = listBook.length;
    });
  }
}

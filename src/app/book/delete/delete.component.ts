import {Component, OnInit} from '@angular/core';
import {IBook} from '../../interface/ibook';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  book: IBook;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.delete(id).subscribe(
      next => this.router.navigateByUrl(''),
      error => console.log(error));
    }
}

import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {IBook} from '../../interface/ibook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formEdit: FormGroup;
  book: IBook;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['']
    });
    let id;
    this.route.paramMap.subscribe(
      (paramMap: ParamMap) => id = paramMap.get('id')
    );
    this.bookService.getBookById(+id).subscribe(
      next => {
        this.book = next;
        this.formEdit.patchValue(this.book);
      },
      error => console.log(error)
    );
  }

  updateBook(): void {
    if (this.formEdit.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      const data = this.formEdit.value;
      this.bookService.update(id, data).subscribe(
        next => this.router.navigateByUrl(''),
        error => console.log(error)
      );
    } else {
      alert('Quay lại');
    }
  }
}

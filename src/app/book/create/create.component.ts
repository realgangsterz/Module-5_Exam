import { Component, OnInit } from '@angular/core';
import {IBook} from '../../interface/ibook';
import {BookService} from '../../service/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: IBook = {
    title: '',
    author: '',
    description: ''
  };
  postForm: FormGroup;
  constructor(private bookService: BookService,
              private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      // description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  createBook(): void {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      // value.id
      this.bookService.create(value)
        .subscribe(() => {
          alert('thanh cong');
        }, () => {
          alert('khong thanh cong');
        });
    }
    // this.bookService.create(this.book).subscribe(() => {
    //   alert('thanh cong');
    // }, () => {
    //   alert('khong thanh cong');
    // });
  }
}

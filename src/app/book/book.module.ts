import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookRoutingModule} from './book-routing.module';
import { CreateComponent } from './create/create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [BookListComponent, CreateComponent, BookDetailComponent, EditComponent, DeleteComponent],
  exports: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }

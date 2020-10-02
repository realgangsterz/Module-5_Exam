import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {CreateComponent} from './create/create.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }

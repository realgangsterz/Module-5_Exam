import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../interface/ibook';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(API_URL );
  }

  create(book): Observable<IBook> {
    return this.http.post<IBook>(API_URL, book);
  }

  update(id, book): Observable<IBook> {
    return this.http.put<IBook>(API_URL + `/${id}`, book);
  }

  delete(id): Observable<IBook> {
    return this.http.delete(API_URL + `/${id}`);
  }
}

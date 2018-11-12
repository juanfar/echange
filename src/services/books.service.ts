import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Book } from '../interfaces/book';

@Injectable()
export class BookService {
    
    booksCollection: AngularFirestoreCollection<Book>;
    bookDoc: AngularFirestoreDocument<Book>;
    books;
    book;

    constructor(private afs: AngularFirestore) {
        this.booksCollection = this.afs.collection('books');
    }

    getBooks(): Observable<any[]> {
        this.books = this.booksCollection.snapshotChanges()
        .map(changes => {
            return changes.map(action => {
            const data = action.payload.doc.data();
            data.id = action.payload.doc.id;
            return data;
            });
        });
    return this.books;
    }

    getBook(id: string) {
        this.bookDoc = this.afs.doc<any>(`books/${id}`);
        this.book = this.bookDoc.snapshotChanges().map(action => {
          if (action.payload.exists === false) {
            return null;
          } else {
            const data = action.payload.data();
            data.id = action.payload.id;
            return data;
          }
        });
    return this.book;
    }

    addBook(book: Book) {
        this.booksCollection.add(book);
    }
}
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../interfaces/user';

@Injectable()
export class UserService {
    
    usersCollection: AngularFirestoreCollection<any>;
    userDoc: AngularFirestoreDocument<any>;
    users;

    constructor(private afs: AngularFirestore) {
        this.usersCollection = this.afs.collection('users');
    }

    getUsers(): Observable<any[]> {
        this.users = this.usersCollection.snapshotChanges()
        .map(changes => {
            return changes.map(action => {
            const data = action.payload.doc.data();
            data.id = action.payload.doc.id;
            return data;
            });
        });
    return this.users;
    }

    
}
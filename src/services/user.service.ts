import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable()
export class UserService {
    
    usersCollection: AngularFirestoreCollection<any>;
    users: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.users = this.db.collection('users').valueChanges();
    }

    getUsers() {
        return this.users;
    }

    
}
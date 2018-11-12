import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../interfaces/user';

@Injectable()
export class UserService {
    
    usersCollection: AngularFirestoreCollection<User>;
    userDoc: AngularFirestoreDocument<User>;
    user;
    users;

    constructor(private afs: AngularFirestore) {
        
    }

    getUsers() {
      this.usersCollection = this.afs.collection('usuarios');
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

    getUser(id: string) {
        this.userDoc = this.afs.doc<any>(`usuarios/${id}`);
        this.user = this.userDoc.snapshotChanges().map(action => {
          if (action.payload.exists === false) {
            return null;
          } else {
            const data = action.payload.data();
            data.id = action.payload.id;
            return data;
          }
        });
    return this.user;
  }
  
  getByUserName(username: string) {
    this.usersCollection = this.afs.collection('usuarios', ref => ref.where('username', '==', username));
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

  getByDevice(deviceId: string) {
    this.usersCollection = this.afs.collection('usuarios', ref => ref.where('deviceId', '==', deviceId));
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

  addUser(user: User) {
    this.usersCollection = this.afs.collection('usuarios');
    this.usersCollection.add(user);
  }

  addDeviceId(id: string, deviceId: string, isLogged: boolean) {
    this.afs.collection('usuarios').doc(id).update({
      'deviceId': deviceId,
      'isLogged': isLogged
    })
  }
  
}
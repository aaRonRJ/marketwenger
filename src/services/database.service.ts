import { Injectable } from "@angular/core";

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
    constructor(private afDB: AngularFireDatabase) {}

    players(): Observable<any[]> {
      return this.afDB.list('/player').valueChanges();
    }
}
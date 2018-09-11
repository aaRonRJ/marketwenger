import { Injectable } from "@angular/core";
import { updateDate } from "ionic-angular/umd/util/datetime-util";

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
    constructor(private afDB: AngularFireDatabase) {}

    players(): Observable<any[]> {
      return this.afDB.list('/player').valueChanges();
    }

    savePlayer(player: any, key: string): boolean {
      this.afDB.object(`player/${key}`).update(player)
      .then(() => {
        return true;
      });

      return false;
    }
}
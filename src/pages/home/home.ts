import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Components
import { AddPlayerPage } from './add-player/add-player';
import { OperationsPage } from '../operations/operations';

import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  players: any[] = [];
  
  constructor(public navCtrl: NavController,
              private databaseService: DatabaseService) {
    this.databaseService.players()
    .subscribe((data) => {
      this.players = data;
    })
  }

  ionViewWillEnter() {
  }

  goToExpenses(id): void {
    this.navCtrl.push(OperationsPage, { id: id });
  }

  addPlayer(): void {
    this.navCtrl.push(AddPlayerPage);
  }
}

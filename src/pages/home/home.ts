import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Components
import { AddPlayerPage } from './add-player/add-player';
import { OperationsPage } from '../operations/operations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  players: any[] = [];
  
  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
  }

  goToExpenses(id): void {
    this.navCtrl.push(OperationsPage, { id: id });
  }

  addPlayer(): void {
    this.navCtrl.push(AddPlayerPage);
  }
}

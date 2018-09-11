import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-operations',
    templateUrl: 'operations.html'
})
export class OperationsPage {
    id: string;

    constructor(private navParams: NavParams) {
        this.id = this.navParams.get('id');
    }
}
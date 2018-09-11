import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-add-player',
    templateUrl: 'add-player.html'
})

export class AddPlayerPage {
    registerPlayerForm: FormGroup;

    constructor(public navCtrl: NavController) {
        // Form initialization
        this.registerPlayerForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            balance: new FormControl({ value: '20.000.000', disabled: true })
        });
    }

    save() {}
}
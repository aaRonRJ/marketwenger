import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

// Providers
import { DatabaseService } from '../../../services/database.service';

@Component({
    selector: 'page-add-player',
    templateUrl: 'add-player.html'
})

export class AddPlayerPage {
    registerPlayerForm: FormGroup;

    constructor(public navCtrl: NavController,
                private viewCtrl: ViewController,
                private databaseService: DatabaseService) {
        // Form initialization
        this.registerPlayerForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            balance: new FormControl({ value: '20000000', disabled: true })
        });
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    save() {
        let key = new Date().valueOf().toString();

        let player = {
            key: key,
            name: this.registerPlayerForm.controls['name'].value,
            balance: this.registerPlayerForm.controls['balance'].value
        };

        if (this.databaseService.savePlayer(player, key)) {
            // TODO: Mostrar un Toast diciendo que el usuario se ha guardado correctamente.
            console.log('Guardado');
            this.viewCtrl.dismiss();
        } else {
            // TODO: Mostrar Toast diciendo que el usuario no se ha guardado.
            console.log('No guardado');
        }
    }
}
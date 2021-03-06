import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  activarPrincipal() {
    this.navCtrl.parent.select(0);
  }

  mostrarModal(){
    let modal = this.modalCtrl.create( ModalPage, {nombre:"Fernando", edad: 30} );
    modal.present();

    modal.onDidDismiss( parametros => {
      console.log("Data del modal: ");
      console.log( parametros );
    } );
  }

}

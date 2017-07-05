import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string= "";
  edad: number = 0;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log( this.nombre, this.edad);
  }

  cerrarConParametros(){
    let data = {
      nombre: "Juan Carlos",
      edad: 18,
      coords: {
        lat: 10,
        long: -10
      }
    };

    this.viewCtrl.dismiss( data );
  }

  cerrarSinParametros(){
      this.viewCtrl.dismiss(  );
  }

}

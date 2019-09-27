import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaginaInicioPage } from '../pagina-inicio/pagina-inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  CloseSession(){
    this.navCtrl.setRoot(PaginaInicioPage);
  }

}

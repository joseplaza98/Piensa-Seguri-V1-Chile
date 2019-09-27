import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema1_1aPage } from '../Contenidos Tema 1-1/tema1-1a/tema1-1a';
import { Tema1_1bPage } from '../Contenidos Tema 1-1/tema1-1b/tema1-1b';
import { Tema1_1cPage } from '../Contenidos Tema 1-1/tema1-1c/tema1-1c';
import { Tema1_1dPage } from '../Contenidos Tema 1-1/tema1-1d/tema1-1d';
import { Tema1_1ePage } from '../Contenidos Tema 1-1/tema1-1e/tema1-1e';
import { SelecPage } from '../../Selecciones/selec/selec';

/**
 * Generated class for the Tema1_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema1-1',
  templateUrl: 'tema1-1.html',
})
export class Tema1_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema1_1Page');
  }

  aTema1_1a() {
    this.navCtrl.push(Tema1_1aPage);
  }

  aTema1_1b() {
    this.navCtrl.push(Tema1_1bPage);
  }

  aTema1_1c() {
    this.navCtrl.push(Tema1_1cPage);
  }

  aTema1_1d() {
    this.navCtrl.push(Tema1_1dPage);
  }

  aTema1_1e() {
    this.navCtrl.push(Tema1_1ePage);
  }

  aSeleccionActividades() {
    this.navCtrl.push(SelecPage)
  }

}

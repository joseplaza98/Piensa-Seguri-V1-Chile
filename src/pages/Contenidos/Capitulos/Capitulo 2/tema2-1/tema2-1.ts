import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema2_1aPage } from '../Contenidos Tema 2-1/tema2-1a/tema2-1a';
import { Tema2_2aPage } from '../Contenidos Tema 2-2/tema2-2a/tema2-2a';
import { Tema2_3aPage } from '../Contenidos Tema 2-3/tema2-3a/tema2-3a';
import { SelecPage } from '../../Selecciones/selec/selec';

/**
 * Generated class for the Tema2_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema2-1',
  templateUrl: 'tema2-1.html',
})
export class Tema2_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema2_1Page');
  }

  aTema2_1a(){
this.navCtrl.push(Tema2_1aPage);
  }

  aTema2_2a(){
    this.navCtrl.push(Tema2_2aPage);
  }

  aTema2_3a(){
    this.navCtrl.push(Tema2_3aPage);
  }

  aActividades_T2(){
    this.navCtrl.push(SelecPage);
  }
}

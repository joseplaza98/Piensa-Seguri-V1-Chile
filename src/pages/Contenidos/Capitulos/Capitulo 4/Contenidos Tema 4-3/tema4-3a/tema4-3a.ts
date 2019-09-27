import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema4_3bPage } from '../tema4-3b/tema4-3b';

/**
 * Generated class for the Tema4_3aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-3a',
  templateUrl: 'tema4-3a.html',
})
export class Tema4_3aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_3aPage');
  }

  aTema4_3b(){
    this.navCtrl.push(Tema4_3bPage);
  }

}

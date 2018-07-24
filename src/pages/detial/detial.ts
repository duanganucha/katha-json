import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detial',
  templateUrl: 'detial.html',
})
export class DetialPage implements OnInit {

  idBanner: string;
  idInterstitial: string;
  data;
  constructor(
    public navCtrl: NavController, private param: NavParams
  ) {}

  ngOnInit() {
    this.data = this.param.data;

  }



}

import { DetialPage } from './../detial/detial';
import { DataProvider } from './../../providers/data/data';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  
  datas: any;
  idBanner: string;

  constructor(
    public navCtrl: NavController,
    private data: DataProvider,
  
  ) {
    console.log(this.datas = data)
    this.datas = data.data;

  }
  

  clickDetail(tree) {
    this.navCtrl.push(DetialPage, tree);
    // go to next detail page
  }
  
  onAbout() {
    console.log('on about')
    window.open('http://google.com','_self'); 

  }
}

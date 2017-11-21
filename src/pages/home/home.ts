import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DeviceMotion, DeviceMotionAccelerationData} from '@ionic-native/device-motion';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public acceleration$: Observable<DeviceMotionAccelerationData>;
  public url:string = "http://floripavip.com.br";

  constructor(
    public navCtrl: NavController,
    public deviceMotion: DeviceMotion,
    public iab: InAppBrowser,
    public platform: Platform) {
  }

  ionViewDidLoad(){
    this.platform.ready().then(() =>{
      this.acceleration$ = this.deviceMotion.watchAcceleration({frequency: 500});
    })
  }

  openWithSystemBrowser(url:string){
    this.iab.create(this.url, '_system');
  }

  openWithInAppBrowser(url:string){
    this.iab.create(this.url);
  }

  openWithIframe(url:string){
    this.navCtrl.push("IframePage", {url: this.url});
  }
}

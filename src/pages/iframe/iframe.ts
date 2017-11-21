import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Generated class for the IframePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iframe',
  templateUrl: 'iframe.html',
})
export class IframePage {

  public url:SafeResourceUrl;

  constructor(public navParams: NavParams, public domSanitizer: DomSanitizer) {
  }

  ngOnInit(){
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("url"));
  }
}

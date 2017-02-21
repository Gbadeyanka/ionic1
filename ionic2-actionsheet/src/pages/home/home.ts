import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController) {

  }

  openActionSheet(){
    console.log('opening');
    let actionsheet = this.actionSheetCtrl.create({
      title:"Choose Album",
      buttons:[{
          text: 'Camera',
          handler: () => {
            console.log("Camera Clicked");
          }
      },{
        text: 'Gallery',
        handler: function(){
          console.log("Gallery Clicked");
        }
      }]
    });
    actionsheet.present();

  }

}

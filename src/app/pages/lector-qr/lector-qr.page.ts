import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {

  constructor(
    private barcodeScann: BarcodeScanner, 
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  scannerQR(){
    this.barcodeScann.scan().then(
      barcodeData=>{
        this.mensaje(barcodeData);
      }
    )
  }

  async mensaje(texto:any){
    let toast= await this.toastCtrl.create({
      message: 'Se escaneo:'+texto,
      duration: 5000,
      position: 'top'
    });
    await toast.present();
  }

}

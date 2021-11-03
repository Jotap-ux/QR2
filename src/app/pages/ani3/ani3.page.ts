import { Component, OnInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-ani3',
  templateUrl: './ani3.page.html',
  styleUrls: ['./ani3.page.scss'],
})
export class Ani3Page implements OnInit {
  
  animation: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
   this.animation= this.animationCtrl.create()
      .addElement(document.querySelector('.square'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
  play(){
    this.animation.play();
  }
  pause(){
    this.animation.pause();
  }
  stop(){
    this.animation.stop();
  }

}

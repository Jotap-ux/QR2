import { Component, OnInit } from '@angular/core'; 
import { AnimationController,Animation } from '@ionic/angular';
@Component({
  selector: 'app-ani4',
  templateUrl: './ani4.page.html',
  styleUrls: ['./ani4.page.scss'],
})
export class Ani4Page implements OnInit {
  squareA: Animation;
  squareC: Animation;
  squareB: Animation;
  parent: Animation;

  constructor(private animationCtrl: AnimationController) {
  }
  ngOnInit() {
    this.squareA = this.animationCtrl.create()
    .addElement(document.querySelector('.square-a'))
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(45deg)' }
    ]);
  
  this.squareB = this.animationCtrl.create()
    .addElement(document.querySelector('.square-b'))
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  
  this.squareC = this.animationCtrl.create()
    .addElement(document.querySelector('.square-c'))
    .duration(5000)
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' }
    ]);
  
  this.parent = this.animationCtrl.create()
    .duration(2000)
    .iterations(Infinity)
    .addAnimation([this.squareA, this.squareB,this.squareC]);
  }
  
  play(){
    this.parent.play();
  }
  pause(){
    this.parent.pause();
  }
  stop(){
    this.parent.stop();
  }
}



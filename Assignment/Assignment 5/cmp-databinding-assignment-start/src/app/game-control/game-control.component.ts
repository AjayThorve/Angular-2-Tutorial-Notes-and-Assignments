import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStream = new EventEmitter<{Number: number}>();

  n = 0;
  ref;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.ref = setInterval(() => this.incrementEmit(), 1000);
  }

  incrementEmit(){
    console.log(this.n);
    this.n = this.n + 1;
    this.gameStream.emit({
      Number: this.n
    });
  }
  onStop(){
    clearInterval(this.ref);
  }
}

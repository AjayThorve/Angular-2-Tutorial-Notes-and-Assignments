import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OddEvent= [];
  EvenEvent= [];

  gameStreamCreated(gameData: {Number: number}) {
    if (gameData.Number % 2 === 0) {
      this.EvenEvent.push(gameData.Number);
    }else {
      this.OddEvent.push(gameData.Number);
    }

  }
}

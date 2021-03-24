import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-academy';
  data = {
    title: 'angular',
    name: 'pp',
    adress: 'gg'
  };

  onImgCliked() {
    alert('Hello Logo');
  };

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  };

}

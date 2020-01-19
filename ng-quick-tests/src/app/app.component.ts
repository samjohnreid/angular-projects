import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-quick-tests';

  merch = 'movie';

  changeVar(val) {
    this.merch = val;
  }
}

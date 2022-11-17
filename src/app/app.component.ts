import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indirajimenez-site-angular';

  openWhatsapp(){
    window.location.href = "https://wa.me/message/6WGUWO7VOCDXD1"

  }
}

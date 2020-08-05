import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'empowerus';
  options: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/private_files/lf30_g4ft9Z.json',
  };

 
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

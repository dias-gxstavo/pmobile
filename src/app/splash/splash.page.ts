
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class SplashPage implements OnInit {
  organizadinMain = '';
  organizadinDin = '';
  private fullMain = 'ORGANIZA';
  private fullDin = 'DIN';
  private typingIndex = 0;
  private typingInterval: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.startTyping();
    setTimeout(() => {
      this.router.navigateByUrl('/onboarding', { replaceUrl: true });
    }, 2000);
  }

  startTyping() {
    this.organizadinMain = '';
    this.organizadinDin = '';
    this.typingIndex = 0;
    const main = this.fullMain;
    const din = this.fullDin;
    const totalLength = main.length + din.length;
    this.typingInterval = setInterval(() => {
      if (this.typingIndex < totalLength) {
        if (this.typingIndex < main.length) {
          this.organizadinMain += main[this.typingIndex];
        } else {
          this.organizadinDin += din[this.typingIndex - main.length];
        }
        this.typingIndex++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 90);
  }
}

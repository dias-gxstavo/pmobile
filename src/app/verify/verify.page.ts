import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonButtons, IonIcon],
})
export class VerifyPage {
  code1 = '';
  code2 = '';
  code3 = '';
  code4 = '';
  code5 = '';
  code6 = '';
  constructor(private router: Router) {}
  send() {
    this.router.navigateByUrl('/tabs/home');
  }
  goBack() {
    this.router.navigateByUrl('/login');
  }
  autoFocusNext(event: any, idx: number) {
    const input = event.target;
    if (input.value.length === 1) {
      const next = document.getElementsByName('code' + (idx + 1))[0] as HTMLInputElement;
      if (next) next.focus();
    }
  }
}

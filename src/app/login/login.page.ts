import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon, IonButtons],
})
export class LoginPage {
  phone = '';
  constructor(private router: Router) {}
  next() {
    this.router.navigateByUrl('/verify', { state: { phone: this.phone } });
  }
  goBack() {
    this.router.navigateByUrl('/onboarding');
  }
  goToCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}

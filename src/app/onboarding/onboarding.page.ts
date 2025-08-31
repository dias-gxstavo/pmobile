import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, IonIcon],
})
export class OnboardingPage {
  constructor(private router: Router) {}

  goToCadastro() {
    this.router.navigateByUrl('/cadastro', { replaceUrl: true });
  }
  goToLogin() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}

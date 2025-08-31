import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boasvindas',
  templateUrl: './boasvindas.page.html',
  styleUrls: ['./boasvindas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon],
})
export class BoasVindasPage {
  nome = '';
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.nome = nav?.extras?.state?.['nome'] || '';
  }
  goToHome() {
    this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
  }
}

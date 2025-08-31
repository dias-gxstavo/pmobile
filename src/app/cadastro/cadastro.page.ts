import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonButtons, IonIcon],
})
export class CadastroPage {
  nome = '';
  celular = '';
  email = '';
  constructor(private router: Router) {}
  enviar() {
    this.router.navigateByUrl('/boasvindas', { state: { nome: this.nome } });
  }
  goBack() {
    this.router.navigateByUrl('/verify');
  }
}

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
  email = '';
  senha = '';
  constructor(private router: Router) {}
  next() {
    // Aqui você pode implementar a lógica de login
    // Exemplo: this.authService.login(this.email, this.senha)
    // Redireciona após login
    this.router.navigateByUrl('/home');
  }
  goBack() {
    this.router.navigateByUrl('/onboarding');
  }
  goToCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
  forgotPassword() {
    // Implemente a navegação ou lógica de recuperação de senha
    alert('Recuperação de senha não implementada.');
  }
}

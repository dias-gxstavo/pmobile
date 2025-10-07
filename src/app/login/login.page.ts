import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

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
  constructor(private router: Router, private userService: UserService) {}
  next() {
    if (!this.email || !this.senha) {
      alert('Informe email e senha (mock)');
      return;
    }
    // mock login
    this.userService.mockLogin(this.email);
    // navegar para tabs/home (ajuste conforme suas rotas)
    this.router.navigateByUrl('/tabs/home');
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

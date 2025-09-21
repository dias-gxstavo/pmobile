import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon],
})
export class PerfilPage {
  get avatarUrl() {
    return this.userService.avatarUrl;
  }
  set avatarUrl(url: string | null) {
    this.userService.avatarUrl = url;
  }
  get nome() {
    return this.userService.nome;
  }
  set nome(n: string) {
    this.userService.nome = n;
  }
  email = 'gustavodiashug9@gmail.com';
  senha = '';
  nascimento = '';

  constructor(public userService: UserService) {}

  salvar() {
    alert('Alterações salvas!');
  }

  logout() {
    // Lógica de logout será implementada futuramente
    alert('Logout acionado!');
  }

  alterarFoto() {
  }

  onFotoSelecionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

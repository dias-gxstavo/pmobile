import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon],
})
export class PerfilPage {
  user = {
    nome: 'Usuário(a)',
    avatarUrl: 'assets/icon/484.png',
    conquistas: [
      { icon: 'medal-outline', color: '#bdbdbd' },
      { icon: 'star-outline', color: '#bdbdbd' },
      { icon: 'trophy-outline', color: '#bdbdbd' },
    ]
  };
}

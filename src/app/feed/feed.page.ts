import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonicModule, CommonModule, FormsModule]
})
export class FeedPage implements OnInit {
  noticias: Array<{
    titulo?: string;
    descricao?: string;
    imagem?: string;
    data?: string;
  }> = [];

  constructor() { }

  ngOnInit() {
    this.noticias = [
      {
        titulo: 'Como economizar em tempos de crise',
        descricao: 'Especialistas dão dicas para manter o orçamento saudável mesmo com inflação alta.',
        imagem: '',
        data: '28/09/2025'
      },
      {
        titulo: 'Educação financeira nas escolas',
        descricao: 'Projeto de lei propõe ensino obrigatório de finanças para jovens.',
        imagem: '',
        data: '27/09/2025'
      }
    ];
  }
}

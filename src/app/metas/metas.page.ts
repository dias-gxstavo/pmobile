import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonProgressBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonProgressBar
  ],
})
export class MetasPage {}

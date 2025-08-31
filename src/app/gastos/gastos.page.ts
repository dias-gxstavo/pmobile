import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
  ],
})
export class GastosPage {}

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
export class GastosPage {
  transacoes = [
    {
      titulo: 'Compras Online',
      categoria: 'Alimentação',
      valor: '80,00',
      tipo: 'despesa',
      icon: 'cart-outline',
      iconBg: '#6C47FF',
      badge: '',
      badgeColor: ''
    },
    {
      titulo: 'Café de Emergência',
      categoria: 'Alimentação',
      valor: '80,00',
      tipo: 'receita',
      icon: 'cafe-outline',
      iconBg: '#6C47FF',
      badge: 'Alimentação',
      badgeColor: '#4caf50'
    },
    {
      titulo: 'Almoot Deartenta',
      categoria: 'Alimentação',
      valor: '80,00',
      tipo: 'despesa',
      icon: 'restaurant-outline',
      iconBg: '#6C47FF',
      badge: '',
      badgeColor: ''
    },
    {
      titulo: 'Almoço da Emergência',
      categoria: 'Alimentação',
      valor: '80,00',
      tipo: 'despesa',
      icon: 'fast-food-outline',
      iconBg: '#6C47FF',
      badge: '',
      badgeColor: ''
    },
    {
      titulo: 'Reserva da Cortesia',
      categoria: 'Alimentação',
      valor: '50,00',
      tipo: 'receita',
      icon: 'gift-outline',
      iconBg: '#6C47FF',
      badge: 'Alimentação',
      badgeColor: '#4caf50'
    },
    {
      titulo: 'Salário',
      categoria: 'Trabalho',
      valor: '50,00',
      tipo: 'despesa',
      icon: 'cash-outline',
      iconBg: '#6C47FF',
      badge: '',
      badgeColor: ''
    }
  ];
}

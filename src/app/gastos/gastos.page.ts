import { Component, ChangeDetectorRef } from '@angular/core';
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
    { titulo: 'Supermercado', categoria: 'Alimentação', valor: 250.75, tipo: 'despesa', data: '2025-10-05' },
    { titulo: 'Café', categoria: 'Alimentação', valor: 8.5, tipo: 'despesa', data: '2025-10-06' },
    { titulo: 'Salário', categoria: 'Renda', valor: 3500.0, tipo: 'receita', data: '2025-10-01' },
    { titulo: 'Transporte', categoria: 'Transporte', valor: 45.0, tipo: 'despesa', data: '2025-09-28' },
    { titulo: 'Assinatura', categoria: 'Serviços', valor: 29.9, tipo: 'despesa', data: '2025-10-10' },
    { titulo: 'Venda', categoria: 'Renda', valor: 120.0, tipo: 'receita', data: '2025-10-12' }
  ];

  selectedMonth: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  constructor(private cd: ChangeDetectorRef) {}

  get transacoesDoMes() {
    const year = this.selectedMonth.getFullYear();
    const month = this.selectedMonth.getMonth();
    return this.transacoes.filter(t => {
      const d = new Date(t.data);
      return d.getFullYear() === year && d.getMonth() === month;
    });
  }

  get totalDespesas() {
    return this.transacoesDoMes
      .filter(t => t.tipo === 'despesa')
      .reduce((s, t) => s + Number(t.valor), 0);
  }

  mudarMes(delta: number) {
    const y = this.selectedMonth.getFullYear();
    const m = this.selectedMonth.getMonth();
    this.selectedMonth = new Date(y, m + delta, 1);
    console.log('mudarMes -> selectedMonth', this.selectedMonth);
    // força detecção caso o framework não atualize imediatamente
    this.cd.detectChanges();
  }

  get mesFormatado() {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(this.selectedMonth);
  }
}

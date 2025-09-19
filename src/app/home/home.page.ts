
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule]
})
export class HomePage {
  nomeUsuario: string = 'Nome Usuário';
  showReceita: boolean = true;
  showDespesa: boolean = true;

  toggleReceita() {
    this.showReceita = !this.showReceita;
  }

  toggleDespesa() {
    this.showDespesa = !this.showDespesa;
  }
}

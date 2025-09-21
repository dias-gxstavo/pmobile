
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule]
})
export class HomePage {
  constructor(public userService: UserService, private router: Router) {}

  goPerfil() {
    this.router.navigateByUrl('/tabs/perfil');
  }

  get avatarUrl() {
    return this.userService.avatarUrl;
  }
  get nome() {
    return this.userService.nome;
  }

  showReceita: boolean = true;
  showDespesa: boolean = true;

  toggleReceita() {
    this.showReceita = !this.showReceita;
  }

  toggleDespesa() {
    this.showDespesa = !this.showDespesa;
  }
}

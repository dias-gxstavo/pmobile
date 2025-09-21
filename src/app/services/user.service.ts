import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _avatarUrl: string | null = null;
  private _nome: string = '';

  get avatarUrl() {
    return this._avatarUrl;
  }
  set avatarUrl(url: string | null) {
    this._avatarUrl = url && url.trim() !== '' ? url : null;
  }

  get nome() {
    return this._nome;
  }
  set nome(n: string) {
    this._nome = n;
  }
}

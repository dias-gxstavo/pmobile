import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _avatarUrl: string | null = null;
  private _nome: string = '';
  private _email: string | null = null;

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

  get email() {
    return this._email;
  }

  set email(e: string | null) {
    this._email = e;
  }

  // Mock login routine: store basic user info locally
  mockLogin(email: string, nome?: string) {
    this._email = email;
    this._nome = nome || email.split('@')[0];
  }
}

import { Injectable } from '@angular/core';

import { WindowRefService } from '../shared/window-ref.service';

import { Auth } from '../shared/models/auth.model';
import { Session } from '../shared/models/session.model';

const TOKEN_KEY = 'accessToken';
const USER_IDENTIFIER = 'uid';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private storage = this.windowRefService.nativeWindow.localStorage;

  constructor(private windowRefService: WindowRefService) { }

  public save(auth: Auth): void {
  	this.storage.setItem(USER_IDENTIFIER, auth.userId);
    this.storage.setItem(TOKEN_KEY, auth.token);
  }

  public delete(): void {
    this.storage.removeItem(USER_IDENTIFIER);
    this.storage.removeItem(TOKEN_KEY);
  }

  public get(): Auth {
    if (!this.storage.getItem(USER_IDENTIFIER)) {
      return null;
    }
    let auth = new Auth();
    auth.userId = this.storage.getItem(USER_IDENTIFIER);
    auth.token = this.storage.getItem(TOKEN_KEY);
    return auth;
  	// const userId = this.storage.getItem(USER_IDENTIFIER);
   //  const token = this.storage.getItem(TOKEN_KEY);
   //  return new Auth({userId, token});
  }

  // isExpired
  
}

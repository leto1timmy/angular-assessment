import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts: Account[] = [
      { id: 11, name: 'Konto Przekozystne', number: '76102027338553939465604292' },
      { id: 12, name: 'Konto Premium', number: '98913500081009542368928206' },
      { id: 13, name: 'Konto Gold', number: '83124035780590513114017994' },
      { id: 14, name: 'Klient Platyna', number: '84193000058409570898587160' },
      { id: 15, name: 'Konto Twoj Biznes', number: '25124043863165548926081403' }
    ];
    return { accounts };
  }

  genId(accounts: Account[]): number {
    return accounts.length > 0 ? Math.max(...accounts.map(hero => hero.id)) + 1 : 11;
  }
}

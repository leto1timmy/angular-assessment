import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsUrl = 'api/accounts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ` + error);
      return of(result as T);
    };
  }

  getAccounts(): Observable<Account[]> {
    return this.http
      .get<Account[]>(this.accountsUrl)
      .pipe(catchError(this.handleError<Account[]>('getAccounts', [])));
  }

  getAccount(id: number): Observable<Account> {
    const url = `${this.accountsUrl}/${id}`;
    return this.http.get<Account>(url).pipe(catchError(this.handleError<Account>('getAccount')));
  }

  updateAccount(account: Account): Observable<any> {
    return this.http
      .put(this.accountsUrl, account, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateAccount')));
  }

  addAccount(account: Account): Observable<Account> {
    return this.http
      .post<Account>(this.accountsUrl, account, this.httpOptions)
      .pipe(catchError(this.handleError<Account>('addAccount')));
  }

  deleteAccount(account: Account | number): Observable<Account> {
    const id = typeof account === 'number' ? account : account.id;
    const url = `${this.accountsUrl}/${id}`;

    return this.http
      .delete<Account>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Account>('deleteAccount')));
  }

  constructor(private http: HttpClient) {}
}

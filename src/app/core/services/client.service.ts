import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL = "http://localhost:3000/clients"

  constructor(private http: HttpClient) { }
  
  getClients(clientNameFilter: string, page: number):Observable<HttpResponse<Client[]>>{
    let url = `${this.baseURL}?name_like=${clientNameFilter}&_page=${page}&_sort=name`;
    return this.http.get<Client[]>(url, {observe: 'response'});
  }

  getClientById(id: number): Observable<Client> {
    let url = `${this.baseURL}/${id}`;
    return this.http.get<Client>(url)
  }

  deleteClient(client: Client): Observable<void> {
    let url = `${this.baseURL}/${client.id}`;
    return this.http.delete<void>(url);
  }

  saveClient(client: Client): Observable<void> {
    let url = this.baseURL;
    return this.http.post<void>(url, client);
  }

  updateClient(client: Client): Observable<void> {
    let url = `${this.baseURL}/${client.id}`;
    return this.http.put<void>(url, client);
  }
}

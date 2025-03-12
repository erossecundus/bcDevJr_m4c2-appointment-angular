import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../core/services/client.service';
import { Client } from '../../../../core/models/client';
import { Page } from '../../../../core/models/page';

@Component({
  selector: 'app-client-table-page',
  templateUrl: './client-table-page.component.html',
  styleUrl: './client-table-page.component.css'
})
export class ClientTablePageComponent implements OnInit {


  constructor(private clientService: ClientService){}

  clientPage: Page<Client> = {} as Page<Client>;
  page = 1;

  filter: string = '';

 

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients(this.filter.trim(), this.page).subscribe({
      next: response => {
        this.clientPage.content = response.body;
        this.clientPage.numberOfElements = parseInt(response.headers.get("X-Total-Count") || "0")
      }
    })
  }

  pageChange() {
    this.loadClients();
  }

  filterName() {
    this.loadClients();
  }
  
  deleteClient(client: Client) {
    this.clientService.deleteClient(client).subscribe({
      next: () => {
        this.loadClients();
      },
      error: () => {
        alert("Erro ao deletar cliente");
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../core/services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-client-form-page',
  templateUrl: './client-form-page.component.html',
  styleUrl: './client-form-page.component.css'
})
export class ClientFormPageComponent implements OnInit{

  formClient: FormGroup;
  isEditing: Boolean = false;

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService,
              private location: Location,
              private router: ActivatedRoute,
              private toastService: ToastService
            ) {
    this.formClient = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      let clientId = Number(params.get("id") ?? "0");
      if(clientId){
        this.loadClient(clientId);
        this.isEditing = true;
      }
    })
  }

  loadClient(clientId: number) {
    this.clientService.getClientById(clientId).subscribe({
      next: client => {
        this.formClient.setValue(client);
      },
      error: () => alert("Erro ao carregar cliente")
    })
  }

  saveClient() {
    if (this.formClient.valid) {
      if(this.isEditing) {
        this.clientService.updateClient(this.formClient.value).subscribe({
          next: () => {
            this.toastService.show("Cliente atualizado com sucesso!", {classname: "bg-success text-light"});
            this.location.back();
          },
          error: () => this.toastService.show("Erro ao salvar o cliente", {classname: "bg-danger text-light"})
        })
      }
      else {
        this.clientService.saveClient(this.formClient.value).subscribe({
          next: () => {
            this.toastService.show("Cliente salvo com sucesso!", {classname: "bg-success text-light"});
            this.location.back();
          },
          error: () => this.toastService.show("Erro ao criar o cliente", {classname: "bg-danger text-light"})
        })
      }
      
    }
  }

  cancel() {
    this.location.back();
  }

  get cfName() { return this.formClient.get("name") }
  get cfPhone() { return this.formClient.get("phone") }
  get cfDateOfBirth() { return this.formClient.get("dateOfBirth") }

}

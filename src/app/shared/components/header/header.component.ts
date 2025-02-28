import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  getRealName(): string {
    return "Maria Joaquina";
  }

  isAdmin(): boolean {
    return true;
  }

  logout() {
    console.log("logout");
  }
}

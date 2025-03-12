import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTablePageComponent } from './client-table-page.component';

describe('ClientTablePageComponent', () => {
  let component: ClientTablePageComponent;
  let fixture: ComponentFixture<ClientTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientTablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

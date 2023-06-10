import { Component } from '@angular/core';
import { AppartamentoService } from '../appartamento.service';
import { Router } from '@angular/router';
import { Appartamento } from 'src/app/model/appartamento';

@Component({
  selector: 'app-appartamento-insert',
  templateUrl: './appartamento-insert.component.html',
  styleUrls: ['./appartamento-insert.component.css']
})
export class AppartamentoInsertComponent {

  constructor(private appartamentoService:AppartamentoService, private router: Router){}

  descrizioneInput:string='';
  dataCostruzioneInput:Date = new Date();
  metriQuadrati:number = 0;
  disponibileDaSubito:boolean=false;

  onPremiConferma(){

    let nuovoAppartamento: Appartamento = {
      id: 0, // Assegna un valore appropriato all'id o gestiscilo nel service
      descrizione: this.descrizioneInput,
      metriQuadrati: this.metriQuadrati,
      dataCostruzione: this.dataCostruzioneInput,
      disponibileDaSubito: this.disponibileDaSubito
    };

    this.appartamentoService.insert(nuovoAppartamento).subscribe(
      (appartamento: Appartamento) => {
        console.log('Appartamento inserito con successo');
        this.onBack();
      },
      (error) => {
        console.error(error);
        // Gestisci l'errore
      }
    );
  }

  onBack() {
    this.router.navigate(['/appartamento/list']);
  }
}

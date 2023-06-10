import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartamentoService } from '../appartamento.service';
import { Appartamento } from 'src/app/model/appartamento';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appartamento-edit',
  templateUrl: './appartamento-edit.component.html',
  styleUrls: ['./appartamento-edit.component.css']
})
export class AppartamentoEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appartamentoService: AppartamentoService, private router: Router) { }

  appartamentoDetail?:Appartamento;

  descrizioneUpdateInput?: string;
  metriQuadratiUpdateInput?: number ;
  dataCreazioneUpdateInput?: Date;
  disponibileDaSubitoUpdateInput?: boolean;

  ngOnInit(): void {
   
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.appartamentoService.findById(id).subscribe(
      (appartamento: Appartamento) => {
        this.appartamentoDetail = appartamento;
      },
      (error) => {
        console.error(error);
      }
    );
    if(this.appartamentoDetail){
    this.descrizioneUpdateInput = this.appartamentoDetail.descrizione;
    this.metriQuadratiUpdateInput = this.appartamentoDetail.metriQuadrati;
    this.dataCreazioneUpdateInput = this.appartamentoDetail.dataCostruzione;
    this.disponibileDaSubitoUpdateInput = this.appartamentoDetail.disponibileDaSubito;
    }
  }

  onBack() {
    this.router.navigate(['/appartamento/list']);
  }

  onPremiAggiorna() {
    if (this.appartamentoDetail) {
      let appartamentoAggiornato: Appartamento = {
        id: this.appartamentoDetail.id,
        descrizione: this.descrizioneUpdateInput || '',
        metriQuadrati: this.metriQuadratiUpdateInput || 0,
        dataCostruzione: this.dataCreazioneUpdateInput || new Date(),
        disponibileDaSubito: this.disponibileDaSubitoUpdateInput || false
      };
  
      this.appartamentoService.update(appartamentoAggiornato).subscribe(
        (appartamento: Appartamento) => {
          console.log('Appartamento updated successfully');
         this.onBack();
        },
        (error) => {
          console.error(error);
          // Gestisci l'errore
        }
      );
    }
  }
}

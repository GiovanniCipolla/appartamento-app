import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartamento } from 'src/app/model/appartamento';
import { AppartamentoService } from '../appartamento.service';

@Component({
  selector: 'app-appartamento-delete',
  templateUrl: './appartamento-delete.component.html',
  styleUrls: ['./appartamento-delete.component.css']
})
export class AppartamentoDeleteComponent {

  // nel costruttore :
  // il classico service
  // Activatedrouter : per fare il "request parameter", prendere in input qualcosa
  // Router , lo utilizzo per fare un redirect sulla pagina precedente
  constructor(private route: ActivatedRoute, private appartamentoService: AppartamentoService, private router: Router) { }


  appartamentoToDelete?: Appartamento;


  // come il detail, inizializziamo la pagina caricando il dispositivo
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    
    //
    this.appartamentoService.findById(id).subscribe(
      (appartamento: Appartamento) => {
        this.appartamentoToDelete = appartamento;
      },
      (error) => {
        console.error(error);
      }
    );

  }
  onBack() {
    this.router.navigate(['/appartamento/list']);
  }
  toDelete() {
    if (this.appartamentoToDelete) {
      this.appartamentoService.delete(this.appartamentoToDelete.id).subscribe(
        (success: boolean) => {
          if (success) {
            console.log('Appartamento deleted successfully');
            this.onBack();
          } else {
            console.log('Failed to delete appartamento');
            // Gestisci il caso in cui il delete fallisce
          }
        },
        (error) => {
          console.error(error);
          // Gestisci l'errore
        }
      );
    }
  }
}

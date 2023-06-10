import { Component, OnInit } from '@angular/core';
import { AppartamentoService } from '../appartamento.service';
import { Appartamento } from 'src/app/model/appartamento';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-appartamento-list',
  templateUrl: './appartamento-list.component.html',
  styleUrls: ['./appartamento-list.component.css']
})
export class AppartamentoListComponent implements OnInit {

  constructor(private appartamentoService: AppartamentoService) { }

  subscription?: Subscription;

  listaAppartamenti: Appartamento[] = [];

  ngOnInit(): void {
    this.subscription = this.appartamentoService.listAll()
      .subscribe(listaAppartamenti => { this.listaAppartamenti = listaAppartamenti })
  }

  ngOnDestroy(): void {
    // Annulla la sottoscrizione per evitare memory leak
    this.subscription?.unsubscribe();
  }

}

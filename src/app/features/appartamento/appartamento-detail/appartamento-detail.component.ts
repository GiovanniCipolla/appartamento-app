import { Component, OnInit } from '@angular/core';
import { Appartamento } from 'src/app/model/appartamento';
import { AppartamentoService } from '../appartamento.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-appartamento-detail',
  templateUrl: './appartamento-detail.component.html',
  styleUrls: ['./appartamento-detail.component.css']
})
export class AppartamentoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appartamentoService: AppartamentoService, private router: Router) { }


  appartamentoDetail?: Appartamento;

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
  }
  onBack() {
    this.router.navigate(['/appartamento/list']);
  }
}


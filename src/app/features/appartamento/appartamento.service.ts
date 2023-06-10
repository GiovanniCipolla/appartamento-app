import { Injectable } from '@angular/core';
import { Appartamento } from 'src/app/model/appartamento';
import { Observable, filter, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartamentoService {

  constructor() { }

  listaAppartamenti:Appartamento[] = [
    {id:1,descrizione:'appartamento a Roma',metriQuadrati:50,dataCostruzione:new Date("1985-4-12"),disponibileDaSubito:true},
    {id:2,descrizione:'attico a Milano',metriQuadrati:75,dataCostruzione:new Date("2020-1-2"),disponibileDaSubito:true},
    {id:3,descrizione:'villetta a Palermo',metriQuadrati:100,dataCostruzione:new Date("2000-1-1"),disponibileDaSubito:false},
    {id:4,descrizione:'appartamento in case popolari Padova',metriQuadrati:45,dataCostruzione:new Date("1985-4-12"),disponibileDaSubito:true},
    {id:5,descrizione:'mega villa a Fornelli',metriQuadrati:450,dataCostruzione:new Date("1997-1-10"),disponibileDaSubito:false},
  ]



  // usiamo gli Osservable perchè :
  // - gestione semplificata degli eventi asincroni 
  //   ( nell'attesa della risposta, posso fare altro mentre senza doobbiamo per forza aspettare)

  
  // funzione che come ritorno ottiene un osservable
  // che emette un array di appartamento
  // con of ( funzione di rxjs) crea un observable
  listAll(): Observable<Appartamento[]> {
    return of(this.listaAppartamenti);
  }

  // stessa cosa qui
  // ritorno un osservable che emette un Appartamento
  // usiamo pipe perche possiamo avere un id non valido
  // cosi da avere un risultato non definito

  findById(id: number): Observable<Appartamento> {
    return of(this.listaAppartamenti.find(item => item.id === id)).pipe(
      filter((appartamento: Appartamento | undefined): appartamento is Appartamento => appartamento !== undefined)
    );
  }

  // stessa logica
insert(appartamento: Appartamento): Observable<Appartamento> {
  this.listaAppartamenti.push(appartamento);
  return of(appartamento);
}

// stessa logica
// -1 perchè in caso la funzione non vada a buon fine restituisce -1
update(appartamento: Appartamento): Observable<Appartamento> {
  const index = this.listaAppartamenti.findIndex(item => item.id === appartamento.id);
  if (index !== -1) {
    this.listaAppartamenti[index] = appartamento;
  }
  return of(appartamento);
}

// stessa logica
delete(id: number): Observable<boolean> {
  const index = this.listaAppartamenti.findIndex(item => item.id === id);
  if (index !== -1) {
    this.listaAppartamenti.splice(index, 1);
    return of(true);
  }
  return of(false);
}
}

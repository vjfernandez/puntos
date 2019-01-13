import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

class Alimento {
  nombre: string;
  puntos: number;

  constructor (nombre, puntos) {
    this.nombre = nombre;
    this.puntos = Number(puntos);
  }


}

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  lineas: Alimento[] = [];
  totalPuntos = 0;
  tNombre = '';
  tPuntos = 0;
  dow = new Date().getDay();


  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this.lineas = this._dataService.get();
    this.recalc();
  }

  clicou(nombre, puntos) {
    // console.log('nom: ' + nombre + ' pun: ' + puntos);
    this.lineas.push(new Alimento(nombre, puntos));
    this.tNombre = '';
    this.tPuntos = 0;
    this.recalc();
    this.save();
  }

  borrar(indice) {
    if (confirm('¿Borrar?')) {
      this.lineas.splice(indice, 1);
    }
    this.recalc();
    this.save();
  }

  recalc() {
    let totalPuntos = 0;
    // tslint:disable-next-line:prefer-const
    for (let alimento of this.lineas) {
      totalPuntos += Number(alimento.puntos);
    }
    this.totalPuntos = totalPuntos;
  }

  save() {
    this._dataService.set(this.lineas);
  }



}

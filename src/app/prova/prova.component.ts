import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Importa il modulo qui
import { MatCardModule } from '@angular/material/card'; // Importa il modulo qui
import {MatButtonModule} from '@angular/material/button'; //import bottoni

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatSlideToggleModule, MatCardModule, MatButtonModule], // Combina entrambi i moduli qui
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'] // Correzione: styleUrl -> styleUrls
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
AfterViewInit, DoCheck, OnDestroy {
  //variabili per lo string interpolation
  cani = [
    {nome: 'roger',
      razza: 'golden',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of dog from Japan. A small, agile dog that copes very well with
      mountainous terrain, the Shiba Inu was originally bred for hunting.`
     }
  ]

  // property binding
  isDisable = true

  constructor(){
    console.log('costruttore')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }
  // Logica del componente
}

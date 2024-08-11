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

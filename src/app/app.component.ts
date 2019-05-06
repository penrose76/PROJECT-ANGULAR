import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT-ANGULAR';
  pies = new Dog('Azor', 10);
  data = new Date();
  psy = new Array<Dog>();
  week = [
    'Poniedzialek',
    'Wtorek',
    'Sroda',
    'Czwartek',
    'Piatek',
    'Sobota',
    'Niedziela'
  ];
  tabelaKluczy = new Array<string>();
  tabelaZrobione = new Array<string>();

  wartosc = '';
  klucz = '';

  constructor() {
    this.psy.push(
      new Dog('Czarek', 11),
      new Dog('Arek', 5),
      new Dog('Azor', 7)
    );
  }

  addKlucz(): void {
    this.tabelaKluczy.push(this.klucz);
    console.log('Dodano klucz ' + this.klucz);
    this.klucz = '';
  }

  removeKlucz(klucz: string): void {
    this.tabelaKluczy = this.tabelaKluczy.filter(i => i !== klucz);
  }

  doneKlucz(klucz: string): void {
    this.tabelaZrobione.push(klucz);
    this.removeKlucz(klucz);
  }
}

class Dog {
  constructor(public name: string, public age: number) {}
}

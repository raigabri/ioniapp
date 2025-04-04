import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  texto: string = '';

  constructor() {}

  acao2(){
    alert('Botão 2 acionado!')
  }

}
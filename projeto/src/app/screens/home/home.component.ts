import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: ` 
    <main id="formulario">
      <app-formulario></app-formulario> 
      <app-item-card [pesonagem]="pesonagemPai"></app-item-card>
    </main>
  `,
  styles: [`
      #formulario{
        width: 30%
      }
  `
  ],
})
export class HomeComponent implements OnInit {
  pesonagemPai: any = {
    nome: "Jon Snow",
    imagem:
      "https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg?    ims=704x264",
    nomeAtor: "Kit Harington",
    descricao:
      "Ator ator britânico. É mais conhecido por interpretar Jon Snow na     série televisiva Game of Thrones da HBO. Meu marido, mas ele não sabe U.u",
  };
  
  constructor() {}

  ngOnInit(): void {}


}

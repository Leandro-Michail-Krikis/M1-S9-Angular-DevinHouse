import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-item-card",
  template: `
    <div class="card" style="width: 18rem;">
      <img [src]="pesonagem.imagem" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{pesonagem.nome}}</h5>
        <p class="card-text">
          {{pesonagem.descricao}}
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class ItemCardComponent implements OnInit {
  @Input() pesonagem : any;
  // pesonagem: any = {
  //   nome: "Jon Snow",
  //   imagem:
  //     "https://tm.ibxk.com.br/2022/08/26/26174558850404.jpg?    ims=704x264",
  //   nomeAtor: "Kit Harington",
  //   descricao:
  //     "Ator ator britânico. É mais conhecido por interpretar Jon Snow na     série televisiva Game of Thrones da HBO. Meu marido, mas ele não sabe U.u",
  // };

  
  constructor() {}

  ngOnInit(): void {}
}

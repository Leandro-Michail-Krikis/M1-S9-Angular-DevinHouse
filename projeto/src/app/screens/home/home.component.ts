import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: ` 
    <main id="formulario">
      <app-formulario></app-formulario> 
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
  constructor() {}

  ngOnInit(): void {}
}

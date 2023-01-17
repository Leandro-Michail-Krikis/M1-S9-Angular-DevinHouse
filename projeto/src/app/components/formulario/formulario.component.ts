import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";



@Component({
  selector: "app-formulario",
  template: `
    <form (ngSubmit)="onSubmit()" >
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="workload" class="form-label"
          >Carga horária de horas aula</label
        >
        <input type="text" class="form-control" id="workload" />
      </div>
      <div class="mb-3">
        <label for="school" class="form-label">Escola</label>
        <input type="text" class="form-control" id="school" />
      </div>
      <div class="mb-3">
        <label for="school" class="form-label">Materia opcional?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioMaterial"
            id="radioTrue"
            value="true"
          />
          <label class="form-check-label" for="radioTrue"> Não </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioMaterial"
            id="radioFalse"
            value="false"
          />
          <label class="form-check-label" for="radioFalse"> Sim </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>

    <div id="modalBootstrap" class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Formulário enviado com sucesso</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              (click)="fechaModal()"
            ></button>
          </div>        
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FormularioComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    document.getElementById("modalBootstrap")!.style.display = "block"
  }
  
  fechaModal() {
    document.getElementById("modalBootstrap")!.style.display = "none"
  }
}

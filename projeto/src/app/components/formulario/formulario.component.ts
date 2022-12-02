import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-formulario",
  template: `
    <form>
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
          <label class="form-check-label" for="radioTrue">
            Não
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radioMaterial"
            id="radioFalse"
            value="false"
          />
          <label class="form-check-label" for="radioFalse">
            Sim
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: [],
})
export class FormularioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

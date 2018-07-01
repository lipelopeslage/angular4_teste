import { Component } from "@angular/core";

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent{
  mostraDiv: Boolean = true;
  rangers: Object[] = [
    { "name": "jason", "dinosaur": "tiranousauro rex" },
    { "name": "zack", "dinosaur": "mamute" },
    { "name": "billy", "dinosaur": "triceratops" },
    { "name": "trinity", "dinosaur": "tigre dentes-de-sabre" },
    { "name": "kimberly", "dinosaur": "pterodátilo" }
  ];
}

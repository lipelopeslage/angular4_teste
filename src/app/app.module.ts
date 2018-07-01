import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RangerListComponent } from "./rangers/rangers-list.component";
import { BindingListComponent } from "./bindings/binding-list.component";
import { DirectivesComponent } from "./directives/directives.component";
import { PipesComponent } from "./pipes/pipes.component";

@NgModule({
  imports: [BrowserModule, FormsModule],//importa o BrowserModule, para que a aplicação rode no browser
  declarations: [AppComponent, RangerListComponent, BindingListComponent, DirectivesComponent, PipesComponent],//declara o componente, assim o angular consegue achar seu seletor
  bootstrap: [AppComponent]//defini o componente inicial para a aplicação
})
export class AppModule{}

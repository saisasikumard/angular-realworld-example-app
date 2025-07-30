import { Component } from "@angular/core";
import { HeaderComponent } from "./core/layout/header.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./core/layout/footer.component";
import { Counter } from "./practise/counter/counter";
import { AnimeCharacters } from "./practise/anime-characters/anime-characters";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    Counter,
    AnimeCharacters,
  ],
})
export class AppComponent {}

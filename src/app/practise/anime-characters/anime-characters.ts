import { Component } from "@angular/core";
import { NgFor, NgIf, NgClass } from "@angular/common";

interface AnimeCategory {
  name: string;
  characters: string[];
}

@Component({
  selector: "app-anime-characters",
  imports: [NgFor, NgIf, NgClass],
  templateUrl: "./anime-characters.html",
  styleUrl: "./anime-characters.css",
})
export class AnimeCharacters {
  selectedCategory: string = "";
  selectedCharacters: string[] = [];

  animeCategories: AnimeCategory[] = [
    {
      name: "Naruto",
      characters: [
        "Naruto Uzumaki",
        "Sasuke Uchiha",
        "Sakura Haruno",
        "Kakashi Hatake",
        "Itachi Uchiha",
        "Madara Uchiha",
        "Minato Namikaze",
        "Hinata Hyuga",
      ],
    },
    {
      name: "Dragon Ball",
      characters: [
        "Goku",
        "Vegeta",
        "Gohan",
        "Piccolo",
        "Trunks",
        "Goten",
        "Bulma",
        "Chi-Chi",
        "Master Roshi",
        "Krillin",
      ],
    },
    {
      name: "One Piece",
      characters: [
        "Monkey D. Luffy",
        "Roronoa Zoro",
        "Nami",
        "Usopp",
        "Sanji",
        "Tony Tony Chopper",
        "Nico Robin",
        "Franky",
        "Brook",
        "Jinbe",
      ],
    },
    {
      name: "Attack on Titan",
      characters: [
        "Eren Yeager",
        "Mikasa Ackerman",
        "Armin Arlert",
        "Levi Ackerman",
        "Erwin Smith",
        "Hange Zoe",
        "Jean Kirstein",
        "Connie Springer",
      ],
    },
    {
      name: "My Hero Academia",
      characters: [
        "Izuku Midoriya",
        "Katsuki Bakugo",
        "All Might",
        "Ochaco Uraraka",
        "Shoto Todoroki",
        "Tenya Iida",
        "Tsuyu Asui",
        "Eijiro Kirishima",
      ],
    },
  ];

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    const category = this.animeCategories.find(
      (cat) => cat.name === categoryName,
    );
    this.selectedCharacters = category ? category.characters : [];
  }

  clearSelection() {
    this.selectedCategory = "";
    this.selectedCharacters = [];
  }
}

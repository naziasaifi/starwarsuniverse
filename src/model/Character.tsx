export default interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender:   
   string;
    homeworld: string; // URL of the homeworld
    home_planet: string;
    films: string[];   
   // URLs of films the character appeared in
    species: string[]; // URLs of character's species (empty in this case)
    vehicles: string[]; // URLs of vehicles the character piloted
    starships: string[]; // URLs of starships the character piloted
    created: string; // Date and time character data was created in SWAPI
    edited: string; // Date and time character data was last edited
    url: string; // URL for the character in SWAPI
  }
  